import { useEffect, useState } from "react";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";

type addNewTaskProps = {
    toAddNewTask: (newTask: string) => void;
}

export default function addNewTask(): addNewTaskProps {
    const [currentTasks, setCurrentTasks] = useState<Array<string>>([]);
    const {addSuccess, setAddSuccess} = useModalNewTaskContext();

    useEffect(() => {
        const LocalStorage: string | null = localStorage.getItem('tasksToDo');
        if (LocalStorage) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(LocalStorage);
            setCurrentTasks(LocalStorageJsonParse);
        }
    }, []);

    function toAddNewTask(newTask: string): void {
        const LocalStorageTaskToDo: string | null = localStorage.getItem('tasksToDo');
        const LocalStorageJsonParseTaskToDo: Array<string> = LocalStorageTaskToDo && JSON.parse(LocalStorageTaskToDo.toLowerCase().trim().replace(/\s+/g, ''));
        const LocalStorageDone: string | null = localStorage.getItem('tasksDone');
        const LocalStorageJsonParseDone: Array<string> = LocalStorageDone && JSON.parse(LocalStorageDone.toLowerCase().trim().replace(/\s+/g, ''));
        if (newTask.length <= 0) {
            alert('Não é possível adicionar uma nova tarefa vazia. Por favor, digite algo antes.');
        } else if(LocalStorageJsonParseTaskToDo.includes(newTask.toLowerCase().trim().replace(/\s+/g, '')) || LocalStorageJsonParseDone.includes(newTask.toLowerCase().trim().replace(/\s+/g, ''))) {
            alert('Essa tarefa já existe, que tal criar uma nova? :)');
        } else {
            setCurrentTasks(tasks => [...tasks, newTask]);
        }
    }

    useEffect(() => {
        if(currentTasks.length > 0) {
            localStorage.setItem('tasksToDo', JSON.stringify(currentTasks));
            setAddSuccess(addSuccess ? false : true);
        }
    }, [currentTasks]); 

    return {toAddNewTask}
}