//another variation of children props is when the children is 
// another react component.

type oscarProps = {
    children: React.ReactNode  //type is from @types/react
}

export const Oscar = (props: oscarProps) => {
    return (
        <div>
        <h2> {props.children} </h2>
        </div>
    )
}