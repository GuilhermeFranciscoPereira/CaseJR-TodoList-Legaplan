'use client'
import ModalNewTask from "@/components/Modal/ModalNewTask";
import PrimaryButton from "../PrimaryButton";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";

export default function ButtonToModalNewTasks(): JSX.Element {
    const {modalNewTask, toSetModalNewTasks} = useModalNewTaskContext();
    return (
        <>
        <PrimaryButton firstColor='#0796D3 0%' secondColor='#53C0F0 68.65%' onClick={() => {toSetModalNewTasks()}}>Adicionar nova tarefa</PrimaryButton>
        {modalNewTask ? <ModalNewTask></ModalNewTask> : null}
        </>
    )
}