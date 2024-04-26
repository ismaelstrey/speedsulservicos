import { categoriasServicos } from '@/services/services'
import React from 'react'
import ItemCategorie from './itemCategorie'

export default function Categories() {
    return (
        <div className='h-36 bg-white my-10 flex justify-center items-center gap-8'>
            {categoriasServicos.map((cat, key) => <ItemCategorie key={key} src={cat.icon} height={150} width={120} title={cat.categoria} />)}
        </div>
    )
}
