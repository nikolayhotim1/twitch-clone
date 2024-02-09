import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: 'Gamehub',
	description: 'Fullstack Twitch Clone'
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang='en'>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						forcedTheme='dark'
						storageKey='gamehub-theme'
					>
						<Toaster theme='light' position='bottom-center' />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
