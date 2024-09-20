import './PrimaryButton.scss';

type ButtonProps = {
    children: React.ReactNode;
    firstColor: string;
    secondColor: string,
}

export default function PrimaryButton({children, firstColor, secondColor}: ButtonProps): JSX.Element {
    return (
        <button style={{background: `linear-gradient(90deg, ${firstColor}, ${secondColor})`}}>
            {children}
        </button>
    )
}