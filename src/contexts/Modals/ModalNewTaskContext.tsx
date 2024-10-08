import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type ModalNewTaskContextProps = {
    modalNewTask: boolean;
    addSuccess: boolean;
    setAddSuccess: Dispatch<SetStateAction<boolean>>;
    toSetModalNewTasks: () => void;
}

const ModalNewTaskContext = createContext<ModalNewTaskContextProps>({} as ModalNewTaskContextProps);

const ModalNewTaskProvider = ({children}: {children: React.ReactNode}) => {
    const [modalNewTask, setModalNewTask] = useState<boolean>(false);
    const [addSuccess, setAddSuccess] = useState<boolean>(false);
    
    function toSetModalNewTasks(): void {
        setModalNewTask(modalNewTask ? false : true);
    }

    return (
        <ModalNewTaskContext.Provider value={{modalNewTask, addSuccess, setAddSuccess, toSetModalNewTasks}}>
            {children}
        </ModalNewTaskContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useModalNewTaskContext() {
    const useModalNewTaskContext = useContext(ModalNewTaskContext);
    return useModalNewTaskContext;
}

export {ModalNewTaskProvider, useModalNewTaskContext};