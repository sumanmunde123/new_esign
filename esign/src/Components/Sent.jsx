import { FrappeProvider, useFrappeGetDoc, useFrappeGetDocList } from "frappe-react-sdk";

const Sent = () =>{

    const {data,error, isLoading} = useFrappeGetDocList(
    'Employee', {
 
    })
    console.log(data, isLoading, error)

    return(
        <>
        <FrappeProvider>
        <h2 style={{color:"white"}}>Sent Box</h2>
        </FrappeProvider>
        </>
    )
}

export default Sent;