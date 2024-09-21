'use client';
import { ModalDeleteTaskProvider } from "./Modals/ModalDeleteTaskContext";
import { ModalNewTaskProvider } from "./Modals/ModalNewTaskContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <ModalNewTaskProvider>
            <ModalDeleteTaskProvider>
                {children}
            </ModalDeleteTaskProvider>
        </ModalNewTaskProvider>
    )
}

export default AppProvider;