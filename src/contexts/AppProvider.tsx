'use client';
import { ModalNewTaskProvider } from "./Modals/ModalNewTaskContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <ModalNewTaskProvider>
            {children}
        </ModalNewTaskProvider>
    )
}

export default AppProvider;