import './NavBar.css' 
import { useState } from 'react'   

function NavBar(props){   

    const [pages, setpages] = useState()

    function callAbout(){  
        pages ? setpages(false) : setpages(true)
        props.getAbout(pages)  

    }

    return(
        <div className='MainNavBar'>
            <div className="MainNavTitle">
                <p>Meta</p>
            </div> 
            <div className="MainNavLinks">
                <button onClick={callAbout}>{pages ? 'About' : 'Events'}</button> 
                <button>Contact</button>
            </div> 
        </div>
    )
} 

export default NavBar