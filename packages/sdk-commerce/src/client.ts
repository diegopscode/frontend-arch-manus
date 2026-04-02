import {
  IProduct,
  ICart,
  IOrder,
  IPaginatedResponse,
  IProductFilter,
  IApiResponse,
  IApiError,
} from '@ecommerce/contracts';

export interface ClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class CommerceClient {
  private baseUrl: string;
  private timeout: number;
  private headers: Record<string, string>;

  constructor(config: ClientConfig) {
    this.baseUrl = config.baseUrl;
    this.timeout = config.timeout || 30000;
    this.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<IApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error: IApiError = {
          code: `HTTP_${response.status}`,
          message: response.statusText,
        };
        return { success: false, error };
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      clearTimeout(timeoutId);
      const apiError: IApiError = {
        code: 'REQUEST_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      };
      return { success: false, error: apiError };
    }
  }

  // Product Methods
  async getProducts(
    filter?: IProductFilter,
    pagination?: { page: number; limit: number },
  ): Promise<IApiResponse<IPaginatedResponse<IProduct>>> {
    const params = new URLSearchParams();
    if (pagination) {
      params.append('page', pagination.page.toString());
      params.append('limit', pagination.limit.toString());
    }
    if (filter?.search) {
      params.append('search', filter.search);
    }
    if (filter?.category) {
      params.append('category', filter.category);
    }

    const queryString = params.toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;

    return this.request<IPaginatedResponse<IProduct>>(endpoint);
  }

  async getProduct(id: string): Promise<IApiResponse<IProduct>> {
    return this.request<IProduct>(`/products/${id}`);
  }

  // Cart Methods
  async getCart(cartId: string): Promise<IApiResponse<ICart>> {
    return this.request<ICart>(`/carts/${cartId}`);
  }

  async createCart(): Promise<IApiResponse<ICart>> {
    return this.request<ICart>('/carts', { method: 'POST' });
  }

  async addToCart(
    cartId: string,
    productId: string,
    quantity: number,
  ): Promise<IApiResponse<ICart>> {
    return this.request<ICart>(`/carts/${cartId}/items`, {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  async removeFromCart(
    cartId: string,
    productId: string,
  ): Promise<IApiResponse<ICart>> {
    return this.request<ICart>(`/carts/${cartId}/items/${productId}`, {
      method: 'DELETE',
    });
  }

  // Order Methods
  async createOrder(
    cartId: string,
    orderData: Partial<IOrder>,
  ): Promise<IApiResponse<IOrder>> {
    return this.request<IOrder>('/orders', {
      method: 'POST',
      body: JSON.stringify({ cartId, ...orderData }),
    });
  }

  async getOrder(orderId: string): Promise<IApiResponse<IOrder>> {
    return this.request<IOrder>(`/orders/${orderId}`);
  }
}

export function createCommerceClient(config: ClientConfig): CommerceClient {
  return new CommerceClient(config);
}
