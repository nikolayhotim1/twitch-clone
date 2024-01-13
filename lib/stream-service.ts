import { db } from '@/lib/db'

export async function getStreamByUserId(userId: string) {
	const stream = await db.stream.findUnique({
		where: { userId }
	})
	return stream
}
