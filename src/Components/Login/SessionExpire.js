import {Link} from 'react-router-dom'


function SessionEx(){
    return(
        <div>
            <h1>Your Session is expired!</h1>
            <Link to="/" >Relogin</Link>
        </div>
    )
}

export default SessionEx