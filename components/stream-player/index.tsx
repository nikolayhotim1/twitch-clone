'use client'

import { useViewerToken } from '@/hooks/use-viewer-token'
import { cn } from '@/lib/utils'
import { LiveKitRoom } from '@livekit/components-react'
import { Video } from './video'

type CustomStream = {
	id: string
	isChatEnabled: boolean
	isChatDelayed: boolean
	isChatFollowersOnly: boolean
	isLive: boolean
	thumbnailUrl: string | null
	name: string
}
type CustomUser = {
	id: string
	username: string
	bio: string | null
	stream: CustomStream | null
	imageUrl: string
	_count: { followedBy: number }
}
interface StreamPlayerProps {
	user: CustomUser
	stream: CustomStream
	isFollowing: boolean
}

export function StreamPlayer({
	user,
	stream,
	isFollowing
}: StreamPlayerProps) {
	const { token, name, identity } = useViewerToken(user.id)
	// const { collapsed } = useChatSidebar(state => state)
	if (!token || !name || !identity) {
		return <div>Cannot watch the stream</div>
	}
	return (
		<>
			<LiveKitRoom
				token={token}
				serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
				className='grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full'
				// className={cn(
				// 	'grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full',
				// 	collapsed &&
				// 		'lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'
				// )}
			>
				<div className='space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10'>
					<Video
						hostName={user.username}
						hostIdentity={user.id}
					/>
				</div>
			</LiveKitRoom>
		</>
	)
}
