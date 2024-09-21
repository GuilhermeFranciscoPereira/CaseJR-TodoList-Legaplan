import { useEffect, useState } from "react";

type addNewTaskProps = {
    toAddNewTask: (newTask: string) => void;
}

export default function addNewTask(): addNewTaskProps {
    const [currentTasks, setCurrentTasks] = useState<Array<string>>([]);

    useEffect(() => {
        const LocalStorage: string | null = localStorage.getItem('tasks');
        if (LocalStorage) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(LocalStorage);
            setCurrentTasks(LocalStorageJsonParse);
        } else {
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
        }
    }, []);

    function toAddNewTask(newTask: string): void {
        if (newTask.length <= 0) {
            alert('Ocorreu um erro ao adicionar uma nova tarefa, por favor, tente novamente!');
        } else {
            setCurrentTasks(tasks => [...tasks, newTask]);
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
        }
    }

    useEffect(() => {
        if(currentTasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
        }
    }, [currentTasks]); 

    return {toAddNewTask}
}