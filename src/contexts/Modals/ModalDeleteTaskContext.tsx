import { createContext, useContext, useState } from "react";

type ModalDeleteTaskContextProps = {
    modalDeleteTask: boolean;
    typeTask: string;
    taskName: string;
    toSetTaskNameAndType: (type: string, task: string) => void;
    toSetModalDeleteTasks: () => void;
}

const ModalDeleteTaskContext = createContext<ModalDeleteTaskContextProps>({} as ModalDeleteTaskContextProps);

const ModalDeleteTaskProvider = ({children}: {children: React.ReactNode}) => {
    const [modalDeleteTask, setModalDeleteTask] = useState<boolean>(false);
    const [typeTask, setTypeTask] = useState<string>('');
    const [taskName, setTaskName] = useState<string>('');

    function toSetTaskNameAndType(type: string, task: string) {
        setTypeTask(type);
        setTaskName(task);
    }
    
    function toSetModalDeleteTasks(): void {
        setModalDeleteTask(modalDeleteTask ? false : true);
    }

    return (
        <ModalDeleteTaskContext.Provider value={{modalDeleteTask, typeTask, taskName, toSetModalDeleteTasks, toSetTaskNameAndType}}>
            {children}
        </ModalDeleteTaskContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useModalDeleteTaskContext() {
    const useModalDeleteTaskContext = useContext(ModalDeleteTaskContext);
    return useModalDeleteTaskContext;
}

export {ModalDeleteTaskProvider, useModalDeleteTaskContext};