'use client'
import hookShowAllTask from '@/hooks/LocalStorage/hookShowAllTask';
import Image from 'next/image';
import Trash from '../../assets/trash.png';

export default function ShowAllTasks(): JSX.Element {
    const {allTasks, tasksToDo, tasksDone, handleMoveTask} = hookShowAllTask();
    return (
        <>
        {allTasks.length > 0 
        ?
        <>
            <section className='tasksSection'>
                <div className='tasksToDo'>
                    <h3>Suas tarefas de hoje</h3>
                    {tasksToDo.map((task, index) => (
                        <div className='tasksCardToDo' key={`TaskToDo: ${task} - ${index}`}>
                            <label htmlFor={`taskToDo-${index}`} onClick={() => handleMoveTask('taskToDo',task)}>
                                <input type="checkbox" id={`taskToDo-${index}`} defaultChecked={false}/>
                                <span className="checkboxSquare"></span>
                                <p>{task}</p>
                            </label>
                            <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                        </div>
                    ))}
                </div>
                <div className='tasksDone'>
                    <h3>Tarefas finalizadas</h3>
                    {tasksDone.map((task, index) => (
                        <div className='tasksCardDone' key={`TaskDone: ${task} - ${index}`}>
                            <label htmlFor={`taskDone-${index}`} onClick={() => handleMoveTask('taskDone',task)}>
                                <input type="checkbox" id={`taskDone-${index}`} defaultChecked={true}/>
                                <span className="checkboxSquare"></span>
                                <p>{task}</p>
                            </label>
                            <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
        : <h1 className="zeroTasks">Ainda não há nenhuma tarefa... Que tal clicar no botão abaixo e criar sua primeira tarefa do dia? Venha ser produtivo com a gente!</h1>
        }
        </>
    )
}