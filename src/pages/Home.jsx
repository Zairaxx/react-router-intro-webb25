import { Link } from "react-router-dom"

const Home = ({users}) => {
    return(<div>
        <h2>Startsida</h2>
        <h3>Användarlista</h3>
        <ul>
            {users.map(user => <li><Link to={"/users/" + user.id}>{user.name}</Link></li>)}
        </ul>
        </div>)
}

export default Home