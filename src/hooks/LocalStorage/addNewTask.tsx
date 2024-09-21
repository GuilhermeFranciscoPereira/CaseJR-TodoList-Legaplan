import { useEffect, useState } from "react";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";

type addNewTaskProps = {
    toAddNewTask: (newTask: string) => void;
}

export default function addNewTask(): addNewTaskProps {
    const [currentTasks, setCurrentTasks] = useState<Array<string>>([]);
    const {addSuccess, setAddSuccess} = useModalNewTaskContext();

    useEffect(() => {
        const LocalStorage: string | null = localStorage.getItem('tasks');
        if (LocalStorage) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(LocalStorage);
            setCurrentTasks(LocalStorageJsonParse);
        }
    }, []);

    function toAddNewTask(newTask: string): void {
        if (newTask.length <= 0) {
            alert('Não é possível adicionar uma nova tarefa vazia. Por favor, digite algo antes.');
        } else {
            setCurrentTasks(tasks => [...tasks, newTask]);
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
        }
    }

    useEffect(() => {
        if(currentTasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
            setAddSuccess(addSuccess ? false : true);
        }
    }, [currentTasks]); 

    return {toAddNewTask}
}