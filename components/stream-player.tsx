'use client'

import { useViewerToken } from '@/hooks/use-viewer-token'

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
	if (!token || !name || !identity) {
		return <div>Cannot watch the stream</div>
	}
	return <div>Allowed to watch the stream</div>
}
