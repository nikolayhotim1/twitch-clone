'use server'

import { revalidatePath } from 'next/cache'
import { blockUser, unblockUser } from '@/lib/block-service'

// const roomService = new RoomServiceClient(
// 	process.env.LIVEKIT_API_URL!,
// 	process.env.LIVEKIT_API_KEY!,
// 	process.env.LIVEKIT_API_SECRET!
// )

export async function onBlock(id: string) {
	// const self = await getSelf()
	const blockedUser = await blockUser(id)
	// let blockedUser
	// try {
	// 	blockedUser = await blockUser(id)
	// } catch {
	// 	// This means user is a guest
	// }
	// try {
	// 	await roomService.removeParticipant(self.id, id)
	// } catch {
	// 	// This means user is not in the room
	// }
	revalidatePath('/')
	if (blockedUser) {
		revalidatePath(`${blockedUser.blocked.username}`)
	}
	return blockedUser
}

export async function onUnblock(id: string) {
	// const self = await getSelf()
	const unblockedUser = await unblockUser(id)
	revalidatePath('/')
	if (unblockedUser) {
		revalidatePath(`/u/${unblockedUser.blocked.username}`)
	}
	return unblockedUser
}
