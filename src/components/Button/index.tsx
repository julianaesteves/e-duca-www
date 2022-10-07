import style from "./button.module.scss"

type ButtonProps = {
    title: string;
    backgroundColor: string;
    border: string;
    onClick: () => void;
}

export default function Button({title, backgroundColor, border, onClick} : ButtonProps) {
    return (
        <button onClick={onClick} cla>
            {title}
        </button>
    )
}