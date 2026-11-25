import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix a file from /public with the deploy sub-path (e.g. GitHub Pages "/Portfolio").
 * next/image `src` and plain <a href> do not get `basePath` added automatically.
 */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return path.startsWith('/') ? `${base}${path}` : path
}
