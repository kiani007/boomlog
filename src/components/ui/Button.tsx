'use client';
import { motion } from 'framer-motion';
import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold shadow-md transition-all flex items-center justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300",
    outline: "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
};
