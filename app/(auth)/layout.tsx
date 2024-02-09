import { Logo } from './_components/logo'

interface AuthLayoutProps {
	children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className='h-full flex flex-col items-center justify-center space-y-6'>
			<Logo />
			{children}
		</div>
	)
}
