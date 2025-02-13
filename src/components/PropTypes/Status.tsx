type StatusProps = {
    status: 'loading' | 'success' | 'error'
} 
//this is called union of string literals as status type. 
//because if we pass any string to the status props ts will not show error since message type was string. hence this union helps.



export const Status =(props: StatusProps) => {

    let message
    if(props.status === 'loading'){
        message = 'Loading'
    }else if(props.status === 'success'){
        message = 'Data Fetched successfully'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
            
        </div>
    )
}