import { getFollowedUsers } from '@/lib/follow-service'
import { getRecommended } from '@/lib/recommended-service'
import { Wrapper } from './wrapper'
import { Toggle, ToggleSkeleton } from './toggle'
import { Following, FollowingSkeleton } from './following'
import { Recommended, RecommendedSkeleton } from './recommended'

export async function Sidebar() {
	const following = await getFollowedUsers()
	const recommended = await getRecommended()
	return (
		<Wrapper>
			<Toggle />
			<div className='space-y-4 pt-4 lg:pt-0'>
				<Following data={following} />
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}

export function SidebarSkeleton() {
	return (
		<aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
			<ToggleSkeleton />
			<FollowingSkeleton />
			<RecommendedSkeleton />
		</aside>
	)
}
