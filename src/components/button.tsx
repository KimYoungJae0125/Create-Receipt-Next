const ButtonComponent = ({text,type,onClick}:{text:string,type?:any,onClick?:any}) => {
    return (
        <>
            <button onClick={onClick} type={type}>{text}</button>
            <style jsx> 
            {`
                button {
                    width: 100px;
                    height: 30px;
                    background-color: white;
                    border-radius: 10px;
                }
            `}
            </style>
        </>
    )

}

export default ButtonComponent;