import { Name } from "./Person.types"

type listProps = {
    // names: {
    //     first: string,
    //     last: string

    // }[]
    names: Name[]
}

export const PersonList = (props: listProps) => {

    return (
        <div>
            {
                props.names.map(name=>{
                    return(
                        <h2>{name.first} {name.last}</h2>
                    )
                })
            }
        </div>
    )
}