import './PrimaryButton.scss';

type ButtonProps = {
    children: React.ReactNode;
    firstColor: string;
    secondColor: string;
    textColor?: string;
    onClick: () => void;
}

export default function PrimaryButton({children, firstColor, secondColor, textColor, onClick}: ButtonProps): JSX.Element {
    return (
        <button onClick={onClick} style={{background: `linear-gradient(90deg, ${firstColor}, ${secondColor})`, color: `${textColor}`}}>
            {children}
        </button>
    )
}