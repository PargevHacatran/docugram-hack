interface IButton {
    btnText: string;
    onClick: any;
}

export const Button = ({ btnText, onClick }:IButton) => {
    return (
        <button onClick={(e:any) => onClick(e)}>
            { btnText }
        </button>
    );
}