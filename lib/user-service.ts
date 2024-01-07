import { db } from '@/lib/db'

export async function getUserByUsername(username: string) {
	const user = await db.user.findUnique({
		where: {
			username
		}
		// select: {
		//     id: true,
		//     externalUserId: true,
		//     username: true,
		//     bio: true,
		//     imageUrl: true,
		//     stream: {
		//     	select: {
		//     		id: true,
		//     		isLive: true,
		//     		isChatDelayed: true,
		//     		isChatEnabled: true,
		//     		isChatFollowersOnly: true,
		//     		thumbnailUrl: true,
		//     		name: true
		//     	}
		//     },
		//     _count: {
		//         select: {
		//             followedBy: true
		//         }
		//     }
		// }
	})
	return user
}
