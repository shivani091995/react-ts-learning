
type GreetProps = 
{
    name: string,
    messageCount?: number, // the question mark means its optional. we can leave this props if we want to. 
    isLoggedIn: boolean
}


export const Greet = (props: GreetProps) => {
    //! setting a default value for optional props 
    const { messageCount = 0 } = props; //destracture the object first and use the value directly as shown below
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Hi ${props.name} , You have ${messageCount} unread messages.`
                    : 'Welcome Guest. Please log in'
                }
            </h2>
        </div>
    )
}