import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-purple-500 text-primary-foreground hover:bg-purple-200',
        success: 'bg-success text-success-foreground hover:bg-success-200'  
      },
      size: {
        default: 'h-10 px-4 py-2 font-medium',
        sm: 'h-5 rounded-md px-4 font-extralight',
        lg: 'h-32 rounded-lg px-8',
        rs: 'h-10   rounded-lg px-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);
