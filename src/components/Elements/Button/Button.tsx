import clsx from 'clsx';
import { forwardRef, ButtonHTMLAttributes, ReactElement } from 'react';

import { Spinner } from '@/components/Elements/Spinner';

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
  roundPrimary: 'w-8 h-8 text-white bg-blue-400 hover:bg-blue-600 transition-colors rounded-full',
  transparent: 'mx-5 ml-auto w-1 h-5 rounded-full',
};

const sizes = {
  xs: 'px-1 py-1  text-xs',
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
