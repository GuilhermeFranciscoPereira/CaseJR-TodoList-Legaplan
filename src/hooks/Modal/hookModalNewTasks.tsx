import { Dispatch, SetStateAction, useState } from "react";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";
import AddNewTask from "../LocalStorage/addNewTask";

type hookModalNewTasksProps = {
    newTask: string;
    setNewTask: Dispatch<SetStateAction<string>>;
    handleWithNewTask: () => void;
    toSetModalNewTasks: () => void;
    keyDownListening: (event: {key: string; }) => void;
}

export default function HookModalNewTasks(): hookModalNewTasksProps {
    const {toAddNewTask} = AddNewTask();
    const {toSetModalNewTasks} = useModalNewTaskContext();
    const [newTask, setNewTask] = useState<string>('');

    function handleWithNewTask(): void {
        toAddNewTask(newTask);
        setNewTask('');
        setTimeout(() => {
            toSetModalNewTasks();
        }, 10);
    }

    function keyDownListening(event: { key: string; }): void {
        if (event.key === 'Enter') {
            handleWithNewTask();
        }
    }

    return {newTask, setNewTask, handleWithNewTask, keyDownListening, toSetModalNewTasks};
}