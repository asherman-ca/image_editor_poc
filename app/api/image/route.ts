import { NextRequest, NextResponse } from 'next/server'
const fs = require('fs')
import { converBase64ToImage } from 'convert-base64-to-image'

export async function POST(request: NextRequest) {
	if (!request.body) {
		return new NextResponse('No request body', { status: 400 })
	}
	const body = await request.json()
	const buffer = Buffer.from(body.data, 'base64')
	const file = await fs.writeFileSync('image.jpeg', buffer)
	const fileRes = fs.readFileSync('image.jpeg')

	console.log('file', fileRes)

	// const image = converBase64ToImage(body.data, './public/image2.jpeg')
	// console.log('image', image)

	return new NextResponse(JSON.stringify(body), { status: 200 })
}
