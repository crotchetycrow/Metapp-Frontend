import './NavBar.css'


function NavBar(){ 
    return(
        <div className='MainNavBar'>
            <div className="MainNavTitle">
                <p>Meta</p>
            </div> 
            <div className="MainNavLinks">
                <button>About</button> 
                <button>Contact</button>
            </div> 
        </div>
    )
} 

export default NavBar