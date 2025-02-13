//event props

type buttonProps = {
    handleClick: ()=> void,
    handleEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number)=> void
}

export const Button = (props: buttonProps) => {

    return (
        <div>
            <button onClick={props.handleClick}>Click</button>
            <button onClick={(event)=> props.handleEvent(event, 1)} >handle event</button>
        </div>
    )

}