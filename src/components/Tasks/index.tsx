import ButtonToModalNewTasks from '../Buttons/ButtonsToModal/ButtonToModalNewTasks';
import ShowAllTasks from '../LocalStorage/ShowAllTasks';
import './Tasks.scss';

export default function Tasks(): JSX.Element {
    return (
        <>
        <main className='tasksMain'>
            <ShowAllTasks></ShowAllTasks>
            <ButtonToModalNewTasks></ButtonToModalNewTasks>
        </main>
        </>
    )
}