import { useEffect, useState } from "react";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";

type hookShowAllTaskProps = {
    allTasks: Array<string>; 
    tasksToDo: Array<string>;
    tasksDone: Array<string>;
    handleMoveTask: (type: string, task: string) => void;
}

export default function hookShowAllTask(): hookShowAllTaskProps {
    const [allTasks, setAllTasks] = useState<Array<string>>([]);
    const [tasksToDo, setTasksToDo] = useState<Array<string>>([]);
    const [tasksDone, setTasksDone] = useState<Array<string>>([]);
    const {addSuccess} = useModalNewTaskContext();

    useEffect(() => {
        const allTasksTodo: string | null = localStorage.getItem('tasksToDo');
        const allTasksDone: string | null = localStorage.getItem('tasksDone');
        // For the tasks to do in the local storage.
        if (allTasksTodo) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(allTasksTodo);
            LocalStorageJsonParse.map(task => setAllTasks(tasks => [...tasks, task]));
            setTasksToDo(LocalStorageJsonParse);
        } else {
            localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
        }

        // For the tasks done in the local storage.
        if (allTasksDone) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(allTasksDone);
            LocalStorageJsonParse.map(task => setAllTasks(tasks => [...tasks, task]));
            setTasksDone(LocalStorageJsonParse);
        } else {
            localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
        }
    }, []);

    useEffect(() => {
        const LocalStorageTasksToDo: string | null = localStorage.getItem('tasksToDo');
        const LocalStorageTasksDone: string | null = localStorage.getItem('tasksDone');
        const LocalStorageTasksToDoJsonParse: Array<string> = LocalStorageTasksToDo && JSON.parse(LocalStorageTasksToDo);
        const LocalStorageTasksDoneJsonParse: Array<string> = LocalStorageTasksDone && JSON.parse(LocalStorageTasksDone);
        setTasksToDo(LocalStorageTasksToDoJsonParse);
        setTasksDone(LocalStorageTasksDoneJsonParse);
        LocalStorageTasksToDoJsonParse.map(task => setAllTasks(tasks => [...tasks, task]));
        LocalStorageTasksDoneJsonParse.map(task => setAllTasks(tasks => [...tasks, task]));
    }, [addSuccess])

    function handleMoveTask(type: string, task: string): void {
        if (type === 'taskToDo') {
            setTasksDone(dones => [...dones, task]);
            const updatedTasksToDo = tasksToDo.filter(item => item !== task);
            setTasksToDo(updatedTasksToDo);
        } else if (type === 'taskDone') {
            setTasksToDo(todos => [...todos, task]);
            const updatedTasksDone = tasksDone.filter(item => item !== task);
            setTasksDone(updatedTasksDone);
        }
    }

    useEffect(() => {
        if (tasksDone.length > 0) {
            localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
        }
    }, [tasksDone]);

    useEffect(() => {
        if (tasksToDo.length > 0) {
            localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
        }
    }, [tasksToDo]);

    return {allTasks, tasksToDo, tasksDone, handleMoveTask}
}