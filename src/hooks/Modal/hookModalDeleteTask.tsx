import { useModalDeleteTaskContext } from "@/contexts/Modals/ModalDeleteTaskContext";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";

type hookModalDeleteTasksProps = {
    DeleteTask: () => void
}

export default function HookModalDeleteTasks(): hookModalDeleteTasksProps {
    const {typeTask, taskName, toSetModalDeleteTasks} = useModalDeleteTaskContext();
    const {addSuccess, setAddSuccess} = useModalNewTaskContext();

    function DeleteTask(): void {
        if (typeTask === 'taskToDo') {
            const LocalStorage: string | null = localStorage.getItem('tasksToDo');
            const LocalStorageJsonParse: Array<string> = LocalStorage && JSON.parse(LocalStorage);
            const updatedTasks = LocalStorageJsonParse.filter(task => task !== taskName);
            localStorage.setItem('tasksToDo', JSON.stringify(updatedTasks));
            setAddSuccess(addSuccess ? false : true);
            toSetModalDeleteTasks();
        } else if (typeTask === 'taskDone') {
            const LocalStorage: string | null = localStorage.getItem('tasksDone');
            const LocalStorageJsonParse: Array<string> = LocalStorage && JSON.parse(LocalStorage);
            const updatedTasks = LocalStorageJsonParse.filter(task => task !== taskName);
            localStorage.setItem('tasksDone', JSON.stringify(updatedTasks));
            setAddSuccess(addSuccess ? false : true);
            toSetModalDeleteTasks();
        }
    };

    return {DeleteTask};
}