import {Component} from 'react';

class MenuPlannerPage extends Component {
    constructor(){
        super();
        this.state ={
            currenTime : "00:00:00",
            menu :[
                {id :1, name: '현미밥'}, {id :2, name: '계란실파국'}, {id :3, name: '묵은지두루치기'}, {id :4, name: '근대나물무침'}, {id :5, name: '고구마맛탕'},{id :6, name: '총각김치'},
            ]
        };
    } 
    render(){
        const currentTimer = ()=>{
            const date = new Date();
            const hours = String(date.getHours()).padStart(2,"0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2,"0");
            this.setState({currenTime : `${hours}:${minutes}:${seconds}` });
        }

        const startTimer = ()=>{
            setInterval(currentTimer,1000)
        }
        startTimer();
        return(
            <div className='menu-container'>
                <div className='menu-box'>
                    <h1>현재 시간 : {this.state.currenTime} </h1>
                    {this.state.menu.map((food)=>(<h2 key={food.id}>{food.name}</h2>))}
                </div>
            </div>
        );
    }
}

export default MenuPlannerPage;