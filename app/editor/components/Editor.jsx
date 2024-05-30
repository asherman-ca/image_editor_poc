'use client'
import React, { useState } from 'react'
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor'

export default function Editor() {
	const uploadImage = async (file) => {
		const response = await fetch('/api/image', {
			method: 'POST',
			body: JSON.stringify({ data: file }),
		})

		const data = await response.json()
		console.log('data', data)
	}

	return (
		<div>
			<FilerobotImageEditor
				source='https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg'
				onSave={(editedImageObject, designState) => {
					console.log('saved', editedImageObject, designState)
					const myImageBase64 = editedImageObject.imageBase64
					uploadImage(myImageBase64)
				}}
				annotationsCommon={{
					fill: '#ff0000',
				}}
				Text={{ text: 'Filerobot...' }}
				Rotate={{ angle: 90, componentType: 'slider' }}
				theme={{
					palette: {
						'bg-primary-active': '#76899F',
						'bg-primary': '#282F33',
						'bg-secondary': '#282F33',
						'accent-primary': '#ffffff!important',
						'accent-primary-active': '#ffffff',
						'borders-secondary': '#282F33',
						'borders-primary': '#282F33',
						'light-shadow': '#282F33',
					},
				}}
				tabsIds={[TABS.ADJUST, TABS.WATERMARK, TABS.FINETUNE]} // or {['Adjust', 'Annotate', 'Watermark']}
				defaultTabId={TABS.ADJUST} // or 'Annotate'
				// defaultToolId={ADJUST.CROP} // or 'Text'
			/>
		</div>
	)
}
