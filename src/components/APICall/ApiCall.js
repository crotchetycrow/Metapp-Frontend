import './ApiCall.css'
import { useEffect } from 'react'; 

const eventURL = `https://www.eventbriteapi.com/v3/users/me/?token=${process.env.REACT_APP_SECRET_NAME}`

function ApiCall(){
    
    useEffect(() => {

        fetch(eventURL).then(res => console.log(res))
        
      }, [])
    
    return(
        <div>
            <div className="apiCall"></div>
        </div>
    )
} 

export default ApiCall