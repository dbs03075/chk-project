import { Component } from "react";
import './sidebar.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
  faClipboardCheck,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Sidebar extends Component{
    constructor(){
        super();
        
    }

    render(){
        // [{id:1 name:people}]
        // const {sidebar} = this.props;
        // const sidebarElement = sidebar.map((element) => 
        // (
        // <div key={element.id} className="sideberElement">
        //     <h3 className="sidebarName">{element.name}</h3>
        // </div>
        // ));
        return (
           
            <div className='sidebarContainer'>
                <header className="logo">
                    <h1>청인기억학교</h1>
                </header>
                <div className="sidebarElments">
                    <p>Categories</p>
                    <Link to="/">
                        <div key="1" className="sideberElement">
                            <FontAwesomeIcon icon={faUsers} />
                            <h3 className="sidebarName">people</h3>
                        </div>
                    </Link>
                    <Link to="/attendance">
                        <div key="2" className="sideberElement">
                            <FontAwesomeIcon icon={faClipboardCheck} />
                            <h3 className="sidebarName">출석부</h3>
                        </div>
                    </Link>
                    <Link to="/menu-planner">
                        <div key="3" className="sideberElement">
                            <FontAwesomeIcon icon={faUtensils} />
                            <h3 className="sidebarName">급식표</h3>
                        </div>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default Sidebar;