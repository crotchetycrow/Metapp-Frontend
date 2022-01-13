import './EventItem.css'

function EventItem(props){
    return(
        <div className='EventItem'>
            <p className='title'>{props.title}</p>  
            <p className='des'><b>Description</b></p>
            <p className='description'>{props.des}</p> 
            <p>Rating: {props.rateing}</p> 
            <a href={props.link}>Link</a>
        </div>
    )
} 

export default EventItem