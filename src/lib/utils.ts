import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FilterXSS } from "xss";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const customXSS = new FilterXSS({
  whiteList: {
    br: ['class'], 
  },
});
