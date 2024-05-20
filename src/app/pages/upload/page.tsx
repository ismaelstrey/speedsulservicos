'use client';

import React, { useState } from 'react';

export default function Upload() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            alert('Por favor, selecione um arquivo primeiro!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Arquivo enviado com sucesso!');
            } else {
                alert('Falha no envio do arquivo.');
            }
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
            alert('Ocorreu um erro ao enviar o arquivo.');
        }
    };

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <form onSubmit={handleFormSubmit}>
                <input type="file" name="image" id="image" onChange={handleFileChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
