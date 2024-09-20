import Image from 'next/image';
import Logomark from '../../assets/Logomark.png';
import UserName from '@/hooks/Header/UserName';
import SetDay from '@/hooks/Header/SetDay';
import './Header.scss';

export default function Header(): JSX.Element {
    return (
        <>
        <header>
            <div className='logoDiv'>
                <Image src={Logomark} height={33} width={33.17} alt='Logo da FocalPoint - Localizada no canto superior esquerdo' quality={100}/>
                <h1>FocalPoint</h1>
            </div>
            <div className='userNameDiv'>
                <UserName></UserName>
            </div>
            <div className='setDayDiv'>
                <SetDay></SetDay>
            </div>
        </header>
        </>
    )
}