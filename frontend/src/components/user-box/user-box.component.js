import { Component } from "react";
import './user-box.styles.css';

class UserCard extends Component{
    constructor(){
        super();
        
    }

    render(){
        // [{id:1 name:people}]
        const {users, handleChange} = this.props;
        const userBox = users.map((user) => 
        (   <div key={user.id} className="userBox" onClick={()=>handleChange(user)}>
                <img className="userImg" alt="" src={`https://robohash.org/${user.id}?set=set2`} />
                <h2 className="userName">{user.name}</h2>
                <p className="userPhoneNum">{user.phone_number}</p>
                {/* <h3>{user.vehicle_type}</h3>
                <h3>{user.PIC}</h3> */}
            </div>

        ));
        return (
            <div className='userContainer'>
                {userBox}
            </div>
        )
    }
}

export default UserCard;