const Button = (props) => {
    console.log(props)
    return(
        <button disabled = {props.disabled}>{props.text}</button>
    )
}

export default Button;