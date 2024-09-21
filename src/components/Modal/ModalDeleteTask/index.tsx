import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useModalDeleteTaskContext } from "@/contexts/Modals/ModalDeleteTaskContext"
import HookModalDeleteTasks from "@/hooks/Modal/hookModalDeleteTask";
import './ModalDeleteTask.scss';

export default function ModalDeleteTask(): JSX.Element {
    const {toSetModalDeleteTasks} = useModalDeleteTaskContext();
    const {DeleteTask} = HookModalDeleteTasks();
    return (
        <main className="mainModalDeleteTask">
            <section className="sectionModalDeleteTask">
                <h1>Deletar tarefa</h1>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
                <div className="buttonsDeleteTask">
                    <PrimaryButton firstColor="#E7EEFB" secondColor="#E7EEFB" textColor="#000000" onClick={() => {toSetModalDeleteTasks()}}>Cancelar</PrimaryButton>
                    <PrimaryButton firstColor="#D30707 0%" secondColor="#F05353 68.65%" onClick={() => {DeleteTask()}}>Deletar</PrimaryButton>
                </div>
            </section>
        </main>
    )
}