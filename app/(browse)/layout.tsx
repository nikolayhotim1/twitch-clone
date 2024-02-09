import { Suspense } from 'react'
import { Container } from './_components/container'
import { Navbar } from './_components/navbar'
import { Sidebar, SidebarSkeleton } from './_components/sidebar'

interface BrowseLayoutProps {
	children: React.ReactNode
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
	return (
		<>
			<Navbar />
			<div className='flex h-full pt-20'>
				<Suspense fallback={<SidebarSkeleton />}>
					<Sidebar />
				</Suspense>
				<Container>{children}</Container>
			</div>
		</>
	)
}
