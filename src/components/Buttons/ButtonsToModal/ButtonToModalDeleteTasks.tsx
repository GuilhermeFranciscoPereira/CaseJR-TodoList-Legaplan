'use client'
import ModalDeleteTask from "@/components/Modal/ModalDeleteTask";
import Image from 'next/image';
import Trash from '../../../assets/trash.png';
import { useModalDeleteTaskContext } from "@/contexts/Modals/ModalDeleteTaskContext";

type ButtonToModalDeleteTasksProps = {
    onClick: () => void;
}

export default function ButtonToModalDeleteTasks({onClick}: ButtonToModalDeleteTasksProps): JSX.Element {
    const {modalDeleteTask} = useModalDeleteTaskContext();
    return (
        <>
        <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100} onClick={onClick}/>
        {modalDeleteTask ? <ModalDeleteTask></ModalDeleteTask> : null}
        </>
    )
}