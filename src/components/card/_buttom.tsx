import { deleteService } from '@/services/apiUserServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { FaTrash } from 'react-icons/fa';
interface Props {
    id: number
    job: string
}

export default function ButtomDeleteCard({ id = 0, job }: Props) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteService, onSuccess: () => {
            queryClient.refetchQueries();
        }
    });
    return (
        <button
            onClick={() => mutation.mutate(id)}
        >
            <FaTrash
                className="hover:text-red-600 hover:scale-125"
                title={`Deletar: ${job}`}
            />
        </button>
    )

}
