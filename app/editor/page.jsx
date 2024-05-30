'use client'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor'

const ImageEditor = dynamic(() => import('./components/Editor'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
})

const Page = () => {
	return (
		<div>
			<ImageEditor />
		</div>
	)
}

export default Page
