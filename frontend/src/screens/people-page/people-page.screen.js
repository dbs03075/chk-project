import { Component } from "react";
import { Dropbar } from "../../components/dropbar/dropbar.component";
import SearchBox from "../../components/search-box/search-box.component";
import UserCard from "../../components/user-box/user-box.component";
import UserDetail from "../../components/user-detail-box/user-detail-box.component";
import './people-page.styles.css';

class PeoplePage extends Component{
    constructor(){
        super();
        this.state ={
            users:  [
                {
                    "id": 32,
                    "name": "123123",
                    "user_picture": "",
                    "info": "123",
                    "vehicle_type": "상동",
                    "phone_number": "123",
                    "phone_number_family": "",
                    "phone_number_house": "",
                    "comment": null,
                    "created_at": "2021-12-12T12:45:11.000Z",
                    "createdAt": "2021-12-12T12:45:11.000Z",
                    "updatedAt": "2021-12-12T12:45:11.000Z",
                    "PIC": "dbs03075"
                },
                {
                    "id": 22,
                    "name": "123123",
                    "user_picture": "",
                    "info": "123",
                    "vehicle_type": "상동",
                    "phone_number": "123",
                    "phone_number_family": "",
                    "phone_number_house": "",
                    "comment": null,
                    "created_at": "2021-12-12T12:45:11.000Z",
                    "createdAt": "2021-12-12T12:45:11.000Z",
                    "updatedAt": "2021-12-12T12:45:11.000Z",
                    "PIC": "dbs03075"
                },
                {
                    "id": 12,
                    "name": "123123",
                    "user_picture": "",
                    "info": "123",
                    "vehicle_type": "황금",
                    "phone_number": "123",
                    "phone_number_family": "",
                    "phone_number_house": "",
                    "comment": null,
                    "created_at": "2021-12-12T12:45:11.000Z",
                    "createdAt": "2021-12-12T12:45:11.000Z",
                    "updatedAt": "2021-12-12T12:45:11.000Z",
                    "PIC": "dbs03075"
                },
                {
                    "id": 52,
                    "name": "123123",
                    "user_picture": "",
                    "info": "123",
                    "vehicle_type": "상동",
                    "phone_number": "123",
                    "phone_number_family": "",
                    "phone_number_house": "",
                    "comment": null,
                    "created_at": "2021-12-12T12:45:11.000Z",
                    "createdAt": "2021-12-12T12:45:11.000Z",
                    "updatedAt": "2021-12-12T12:45:11.000Z",
                    "PIC": "dbs03075"
                },
                {
                    "id": 3,
                    "name": "1231234",
                    "user_picture": "",
                    "info": "123",
                    "vehicle_type": "황금",
                    "phone_number": "1231231231231312",
                    "phone_number_family": "",
                    "phone_number_house": "",
                    "comment": null,
                    "created_at": "2021-12-12T12:45:26.000Z",
                    "createdAt": "2021-12-12T12:45:26.000Z",
                    "updatedAt": "2021-12-12T12:45:26.000Z",
                    "PIC": "dbs03075"
                },
                {
                    "id": 34,
                    "name": "성준",
                    "user_picture": "123",
                    "info": "123",
                    "vehicle_type": "용지",
                    "phone_number": "123",
                    "phone_number_family": "1232",
                    "phone_number_house": "123",
                    "comment": null,
                    "created_at": "2021-12-13T12:24:20.000Z",
                    "createdAt": "2021-12-13T12:24:20.000Z",
                    "updatedAt": "2021-12-13T12:24:20.000Z",
                    "PIC": "123"
                },
                {
                    "id": 21,
                    "name": "성준",
                    "user_picture": "123",
                    "info": "123",
                    "vehicle_type": "용지",
                    "phone_number": "123",
                    "phone_number_family": "1232",
                    "phone_number_house": "123",
                    "comment": null,
                    "created_at": "2021-12-13T12:24:20.000Z",
                    "createdAt": "2021-12-13T12:24:20.000Z",
                    "updatedAt": "2021-12-13T12:24:20.000Z",
                    "PIC": "123"
                },
                {
                    "id": 58,
                    "name": "성준",
                    "user_picture": "123",
                    "info": "123",
                    "vehicle_type": "용지",
                    "phone_number": "123",
                    "phone_number_family": "1232",
                    "phone_number_house": "123",
                    "comment": null,
                    "created_at": "2021-12-13T12:24:20.000Z",
                    "createdAt": "2021-12-13T12:24:20.000Z",
                    "updatedAt": "2021-12-13T12:24:20.000Z",
                    "PIC": "123"
                },
                {
                    "id": 59,
                    "name": "성준",
                    "user_picture": "123",
                    "info": "123",
                    "vehicle_type": "용지",
                    "phone_number": "123",
                    "phone_number_family": "1232",
                    "phone_number_house": "123",
                    "comment": null,
                    "created_at": "2021-12-13T12:24:20.000Z",
                    "createdAt": "2021-12-13T12:24:20.000Z",
                    "updatedAt": "2021-12-13T12:24:20.000Z",
                    "PIC": "123"
                }, {
                    "id": 60,
                    "name": "성준",
                    "user_picture": "123",
                    "info": "123",
                    "vehicle_type": "용지",
                    "phone_number": "123",
                    "phone_number_family": "1232",
                    "phone_number_house": "123",
                    "comment": null,
                    "created_at": "2021-12-13T12:24:20.000Z",
                    "createdAt": "2021-12-13T12:24:20.000Z",
                    "updatedAt": "2021-12-13T12:24:20.000Z",
                    "PIC": "123"
                },
            ],
            clickedUser: {},
            searchType: 'searchTextName',
            searchTextName : '',
            DropbarVehicle : '',
            DropbarPIC : '',
            name_type:{
                searchType :'Name',
                placeholder: "사용자 이름을 적어주세요",
            },
            vehicle_type : {
                dropbarType : 'Vehicle',
                dropbarElements : ['상동', '황금', '용지'],
            },
            PIC :{
                dropbarType : 'PIC',
                dropbarElements : ['dbs03075', '123'],

            }

        };
    }


    render(){
        const {users, clickedUser} = this.state;
        const usersNum = users.length;
        
        // search text from dropbar , searchbox
        const searchSetState = async (e)=>{            
            await this.setState({searchType : e.target.name});
            await this.setState({[this.state.searchType] : e.target.value});
        }

        // filter user function // 다시 한번 효율적으로 관리해볼 필요 있다. 
        const filteredUser = users.filter(user =>{
            const searchType = this.state.searchType;
            let key = '';
            switch(searchType){
                case 'searchTextName':
                    key = 'name';
                    break;
                case 'DropbarVehicle':
                    key = 'vehicle_type';
                    break;
                case 'DropbarPIC':
                    key = 'PIC';
                    break;
                default:
                    key = 'name';
            }
            return user[key].toLowerCase().includes(this.state[searchType])
        });

        return (
            <div className="peopleContainer">
                <div className="userList">
                    <div className="userList">People {'>'} Design Team</div>
                    <h1>{usersNum} People</h1>
                    <SearchBox searchType={this.state.name_type.searchType} placeholder={this.state.name_type.placeholder} handleChange={(e)=>searchSetState(e)}></SearchBox>
                    <Dropbar dropbarType={this.state.vehicle_type.dropbarType} dropbarElements={this.state.vehicle_type.dropbarElements} handleChange={(e)=>searchSetState(e)}></Dropbar>
                    <Dropbar dropbarType={this.state.PIC.dropbarType} dropbarElements={this.state.PIC.dropbarElements} handleChange={(e)=>searchSetState(e)}></Dropbar>
                    <UserCard users={filteredUser} handleChange={(user)=>this.setState({clickedUser: user})}></UserCard>
                </div>
                {Object.keys(clickedUser).length !== 0 ? <UserDetail user={clickedUser}></UserDetail> : null}
            </div>
        )
         
    }
}

export default PeoplePage;