import {Link} from 'react-router-dom'


function Allowed(){
    return(
        <div>
            <h1>You are not allowed to visit this page!</h1>
            <Link to="/" >Relogin</Link>
        </div>
    )
}

export default Allowed