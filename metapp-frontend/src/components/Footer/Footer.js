import './Footer.css'

function Footer(props){
    return(
        <div className='footer'>
            <a href='https://github.com/crotchetycrow/Metapp-Frontend'>{props.footer}</a>
        </div> 
    )
} 

export default Footer