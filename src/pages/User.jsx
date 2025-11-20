import { useReducer } from "react";
import { useParams } from "react-router-dom"

const User = ({users}) => {

    const params = useParams();
    //params.id
    //params.hej
    console.log(params);


    let user = users.find(obj => obj.id === Number(params.id))

    return(<div>
        <h2>User page</h2>
        { user &&  <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
        </>
        }

    </div>)
}

export default User