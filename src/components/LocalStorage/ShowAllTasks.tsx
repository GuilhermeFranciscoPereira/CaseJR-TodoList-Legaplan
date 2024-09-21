'use client'
import { useEffect, useState } from "react";
import { useModalNewTaskContext } from "@/contexts/Modals/ModalNewTaskContext";
import Image from 'next/image';
import Trash from '../../assets/trash.png';

export default function ShowAllTasks(): JSX.Element {
    const [allTasks, setAllTasks] = useState<Array<string>>([]);
    const {addSuccess} = useModalNewTaskContext();

    useEffect(() => {
        const LocalStorage: string | null = localStorage.getItem('tasks');
        if (LocalStorage) {
            const LocalStorageJsonParse: Array<string> = JSON.parse(LocalStorage);
            setAllTasks(LocalStorageJsonParse);
        } else {
            localStorage.setItem('tasks', JSON.stringify(allTasks));
        }
    }, []);

    useEffect(() => {
        const LocalStorage: string | null = localStorage.getItem('tasks');
        const LocalStorageJsonParse: Array<string> = LocalStorage && JSON.parse(LocalStorage);
        setAllTasks(LocalStorageJsonParse);
    }, [addSuccess])
    
    return (
        <>
        {allTasks.length > 0 
        ?
        <>
        <h3>Suas tarefas de hoje</h3>
        {allTasks.map((task, index) => (
            <div className='tasksCardToDo' key={`Task: ${task} - ${index}`}>
                <label htmlFor={`task-${index}`}>
                    <input type="checkbox" id={`task-${index}`}/>
                    <span className="checkboxSquare"></span>
                    <p>{task}</p>
                </label>
                <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
            </div>
        ))}
        </>
        : <h3>Ainda não há nenhuma tarefa... Que tal clicar no botão abaixo e criar sua primeira tarefa do dia? Venha ser produtivo com a gente!</h3>
        }
        </>
    )
}