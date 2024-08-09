interface IInput {
    type: string;
    name: string;
    placeholder: string;
    onChange: any;
}

export const Input = ({ type, name, placeholder, onChange }:IInput) => {
    return (
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e:any) => onChange(e)}
        />
    )
}