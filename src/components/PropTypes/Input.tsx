//input props - type II of event props

type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props: inputProps)=>{
    return (
        <input placeholder="text" type="text" value={props.value} onChange={props.handleChange} />
    )
}