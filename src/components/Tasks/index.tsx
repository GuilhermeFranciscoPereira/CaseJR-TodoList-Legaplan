import ButtonToModalNewTasks from '../Buttons/ButtonsToModal/ButtonToModalNewTasks';
import ShowAllTasks from '../LocalStorage/ShowAllTasks';
import './Tasks.scss';

export default function Tasks(): JSX.Element {
    return (
        <>
        <main className='tasksMain'>
            <section className='tasksSection'>
                <div className='tasksToDo'>
                    <ShowAllTasks></ShowAllTasks>
                </div>
                <div className='tasksDone'>
                </div>
            </section>
            <ButtonToModalNewTasks></ButtonToModalNewTasks>
        </main>
        </>
    )
}