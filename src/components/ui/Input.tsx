'use client';
import { InputHTMLAttributes } from 'react';
import { cn } from "../../lib/utils";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {  
  return (
    <input
      type="text"
      className={cn(
        "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-400 transition-all",
        className
      )}
      {...props}
    />
  );
};
