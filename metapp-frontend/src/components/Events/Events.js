import './Events.css' 
import EventItem from '../EventItem/EventItem'

function Events(props){ 

    return(
        <div>  
            <div className='EventTitleCon'>
                <p>Events</p> 
            </div>
            <div className='Events'>
                {props.data.map((item) => {
                return <EventItem title={item['event'][0]} des={item['event'][1]} rateing={item['reviewDate'][0]['stars']} link={item['links']}/>
                })} 
            </div>
        </div>
    )
} 

export default Events