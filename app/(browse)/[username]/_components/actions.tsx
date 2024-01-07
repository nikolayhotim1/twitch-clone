'use client'

import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { onFollow, onUnfollow } from '@/actions/follow'
import { toast } from 'sonner'

interface ActionsProps {
	isFollowing: boolean
	userId: string
}

export function Actions({ isFollowing, userId }: ActionsProps) {
	const [isPending, startTransition] = useTransition()
	function handleFollow() {
		startTransition(() => {
			onFollow(userId)
				.then(data =>
					toast.success(
						`You are now following ${data.following.username}`
					)
				)
				.catch(() => toast.error('Something went wrong'))
		})
	}
	function handleUnfollow() {
		startTransition(() => {
			onUnfollow(userId)
				.then(data =>
					toast.success(
						`You have unfollowed ${data.following.username}`
					)
				)
				.catch(() => toast.error('Something went wrong'))
		})
	}
	function handleClick() {
		if (isFollowing) {
			handleUnfollow()
		} else {
			handleFollow()
		}
	}
	// function handleBlock() {
	// 	startTransition(() => {
	// 		onUnblock(userId)
	// 			.then(data =>
	// 				toast.success(
	// 					`Unblocked the user ${data.blocked.username}`
	// 				)
	// 			)
	// 			.catch(() => toast.error('Something went wrong'))
	// 	})
	// }
	return (
		<>
			<Button
				disabled={isPending}
				onClick={handleClick}
				variant='primary'
			>
				{isFollowing ? 'Unfollow' : 'Follow'}
			</Button>
			{/* <Button onClick={handleBlock} disabled={isPending}>
				Block
			</Button> */}
		</>
	)
}
