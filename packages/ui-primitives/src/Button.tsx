import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    'bg-brand-primary text-text-inverse hover:bg-brand-secondary focus:ring-2 focus:ring-brand-primary',
  secondary:
    'bg-brand-secondary text-text-inverse hover:bg-brand-primary focus:ring-2 focus:ring-brand-secondary',
  outline:
    'border-2 border-brand-primary text-brand-primary hover:bg-gray-50 focus:ring-2 focus:ring-brand-primary',
  ghost:
    'text-brand-primary hover:bg-gray-100 focus:ring-2 focus:ring-brand-primary',
};

const sizeStyles = {
  sm: 'px-sm py-xs text-sm',
  md: 'px-md py-sm text-base',
  lg: 'px-lg py-md text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center
          font-semibold rounded-md
          transition-colors duration-200
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className || ''}
        `}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
