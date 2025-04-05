import { useMoveBack } from "@/hooks/useMoveBack";

type ButtonMoveBackProps = {
    variant?: string;
};

const ButtonMoveBack = ({ variant }: ButtonMoveBackProps) => {
    const moveBack = useMoveBack();
    let styles = "px-2.5 py-1 hover:bg-lightGray rounded-full";

    if (variant === "button")
        styles = "px-4 py-2.5 bg-darkSlate text-white rounded-full";

    return (
        <button onClick={moveBack} className={styles}>
            &larr; Go Back
        </button>
    );
};

export default ButtonMoveBack;