import Image from 'next/image';
import Trash from '../../assets/trash.png';
import ButtonToModalNewTasks from '../Buttons/ButtonsToModal/ButtonToModalNewTasks';
import './Tasks.scss';

export default function Tasks(): JSX.Element {
    return (
        <>
        <main className='tasksMain'>
            <section className='tasksSection'>
                <div className='tasksToDo'>
                    <h3>Suas tarefas de hoje</h3>
                    <div className='tasksCardToDo'>
                        <label htmlFor="checkbox1">
                            <input type="checkbox" id='checkbox1'/>
                            <span className="checkboxSquare"></span>
                            <p>Lavar as mãos</p>
                        </label>
                        <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                    </div>
                    <div className='tasksCardToDo'>
                        <label htmlFor="checkbox2">
                            <input type="checkbox" id='checkbox2'/>
                            <span className="checkboxSquare"></span>
                            <p>Fazer um bolo</p>
                        </label>
                        <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                    </div>
                    <div className='tasksCardToDo'>
                        <label htmlFor="checkbox3">
                            <input type="checkbox" id='checkbox3'/>
                            <span className="checkboxSquare"></span>
                            <p>Lavar a louça</p>
                        </label>
                        <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                    </div>
                </div>
                <div className='tasksDone'>
                    <h3>Tarefas finalizadas</h3>
                    <div className='tasksCardDone'>
                        <label htmlFor="checkbox4">
                            <input type="checkbox" id='checkbox4'/>
                            <span className="checkboxSquare"></span>
                            <p>Levar o lixo para fora</p>
                        </label>
                        <Image src={Trash} width={24} height={24} alt='Imagem de um lixinho para excluir as tarefas' quality={100}/>
                    </div>
                </div>
            </section>
            <ButtonToModalNewTasks></ButtonToModalNewTasks>
        </main>
        </>
    )
}