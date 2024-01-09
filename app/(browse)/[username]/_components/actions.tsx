'use client'

import { useTransition } from 'react'
import { onFollow, onUnfollow } from '@/actions/follow'
import { onBlock, onUnblock } from '@/actions/block'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

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
	function handleFollowFlow() {
		if (isFollowing) {
			handleUnfollow()
		} else {
			handleFollow()
		}
	}
	function handleBlock() {
		startTransition(() => {
			onBlock(userId)
				.then(data =>
					toast.success(
						`You have blocked the user ${data.blocked.username}`
					)
				)
				.catch(() => toast.error('Something went wrong'))
		})
	}
	function handleUnblock() {
		startTransition(() => {
			onUnblock(userId)
				.then(data =>
					toast.success(
						`You have unblocked the user ${data.blocked.username}`
					)
				)
				.catch(() => toast.error('Something went wrong'))
		})
	}
	return (
		<>
			<Button
				disabled={isPending}
				onClick={handleFollowFlow}
				variant='primary'
			>
				{isFollowing ? 'Unfollow' : 'Follow'}
			</Button>
			<Button disabled={isPending} onClick={handleBlock}>
				Block
			</Button>
			<Button disabled={isPending} onClick={handleUnblock}>
				Unblock
			</Button>
		</>
	)
}
