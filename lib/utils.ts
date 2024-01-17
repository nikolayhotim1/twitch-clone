import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import stc from 'string-to-color'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function stringToColor(str: string) {
	return stc(str)
}
