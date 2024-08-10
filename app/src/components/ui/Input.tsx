interface IInput {
    type: string;
    name: string;
    placeholder: string;
    onChange: any;
    id: string | undefined;
}

export const Input = ({ type, name, placeholder, onChange, id }:IInput) => {
    return (
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e:any) => onChange(e)}
            id={id}
        />
    )
}