import Image from 'next/image'
import React from 'react'
interface PropsItemCategorie {
    src: string;
    title: string;
    width?: number,
    height?: number,
}
export default function ItemCategorie({ src, title, width = 200, height = 150 }: PropsItemCategorie) {
    return (
        <div>
            <Image className=' hover:scale-105 hover:cursor-pointer' src={src} width={width} height={height} title={title} alt={title} />
        </div>
    )
}
