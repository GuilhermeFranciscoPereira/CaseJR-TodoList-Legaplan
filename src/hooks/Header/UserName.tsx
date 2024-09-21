'use client';
import { useEffect, useState } from "react";

export default function UserName(): JSX.Element {
    const [userName, setUserName] = useState<string | null>(null);
    
    //Will check if exist a name in the localStorage and if doesn´t exist will show a prompt to put the name of the user
    useEffect(() => {
        const nameLocalStorage: string | null = localStorage.getItem('userName');
        if (nameLocalStorage) {
            setUserName(nameLocalStorage);
        } else {
            let nameChoice: string | null
            do {
                nameChoice = prompt(`Seja muito bem-vindo ao FocalPoint! \nPoderia nos informar como deseja ser chamado?`);
            } while (nameChoice === null || nameChoice.trim() === "");
            
            if (nameChoice) {
                localStorage.setItem('userName', nameChoice);
                setUserName(nameChoice);
            }
        }
    }, []);

    return (
        <>
        {userName && <h2>Bem-vindo de volta, {userName}!</h2>}
        </>
    );
}