import { cva } from "class-variance-authority";

export const TEXTVARIANTS = cva("font-productSansR", {
  variants: {
    variant: {
      sectionHeader: "text-xl font-bold",
      "text-base": "text-sm font-normal",
      "text-sm": "text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
