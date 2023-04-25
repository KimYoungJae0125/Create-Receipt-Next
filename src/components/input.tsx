import { useForm } from "react-hook-form";

const InputComponent = ({name,title,type,width}:{name:string,title:string,type:string,width?:number}) => {
    const { register } = useForm();
    if(!width) width = 300
    return (
        <div>
            <h3>{title}</h3>
            <input {...register(name)} type={type} />
            <style jsx>
            {`
            h3 {
                width: 90px;
                text-align:right;
                margin-left: 10px;
            }
            div {
                display: flex;
                align-items: center;
                margin-top: 20px;
            }
            input {
                margin-left: 10px;
                width: ${width}px;
                height: 40px;
                border-radius: 10px;
            }
            `}

            </style>
        </div>
    )
}

export default InputComponent;