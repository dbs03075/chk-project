import { Component } from "react";
import './user-detail-box.styles.css';

class UserDetail extends Component{
    constructor(){
        super();
        
    }

    render(){
        console.log(this.props)
        const {user} = this.props;
        return (
            <div className=''>
                <div key={user.id} className="userDetailBox">
                    <img className="userDetailImg" alt="" src={`https://robohash.org/${user.id}?set=set2`} />
                    <h2 className="userDetailName">{user.name}</h2>
                    <h3 className="userDetailPhone">{user.phone_number}</h3>
                    <h3 className="userDetailVehicle">{user.vehicle_type}</h3>
                    <h3 className="userDetailPIC">{user.PIC}</h3>
                </div>
            </div>
        )
    }
}

export default UserDetail;