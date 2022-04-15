import "./Button.css"

const Button =(props)=>{
    return(
        <button className="myButton" onClick={()=>props.onClick()} style={{float: props.style}}>{props.buttonName}</button>
    )
}

export  default Button