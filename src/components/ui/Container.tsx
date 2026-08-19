import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cleanPadding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  cleanPadding = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'w-full max-w-site mx-auto',
          !cleanPadding && 'px-6 md:px-12 lg:px-16',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
