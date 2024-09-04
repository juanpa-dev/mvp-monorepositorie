import type { VariantProps } from 'tailwind-variants';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { cn } from '../../utils/utils';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  ],
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary',
      success: 'bg-success text-primary-foreground shadow hover:bg-success'
    },
    size: {
      sm: 'h-8 rounded-md px-3 text-xs',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 rounded-md px-8',
      icon: 'size-9'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

// export function Button() {
//   return (
//     <button className="bg-success text-primary-foreground hover:bg-purple-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
//       Test
//     </button>
//   );
// }
