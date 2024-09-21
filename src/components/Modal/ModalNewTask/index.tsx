import PrimaryButton from "@/components/Buttons/PrimaryButton";
import hookModalNewTasks from "@/hooks/Modal/hookModalNewTasks";
import './ModalNewTask.scss'

export default function ModalNewTask(): JSX.Element {
    const {newTask, setNewTask, keyDownListening, handleWithNewTask, toSetModalNewTasks} = hookModalNewTasks();
    return (
        <main className="mainModalNewTask">
            <section className="sectionModalNewTask">
                <h1>Nova tarefa</h1>
                <label htmlFor="inputNewTask">Título
                    <input type="text" placeholder="Digite" id="inputNewTask" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={keyDownListening}/>
                </label>
                <div className="buttonsNewTask">
                    <PrimaryButton firstColor="#E7EEFB" secondColor="#E7EEFB" textColor="#000000" onClick={() => {toSetModalNewTasks()}}>Cancelar</PrimaryButton>
                    <PrimaryButton firstColor="#0796D3 0%" secondColor="#53C0F0 68.65%" onClick={() => {handleWithNewTask()}}>Adicionar</PrimaryButton>
                </div>
            </section>
        </main>
    )
}