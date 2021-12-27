import React from 'react';
import Sidebar from './components/sidebar/sidebar.component';
import PeoplePage from './screens/people-page/people-page.screen';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MenuPlannerPage from './screens/menu-planner-page/menu-planner-page..screen';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      sidebar:[
        {id:1, name: 'people'},
        {id:2, name : '출석부'},
        {id:3, name : '급식표'}
      ]

    }
  }
  
  render(){
    return (
      <div className='App'>
        <Sidebar sidebar={this.state.sidebar}></Sidebar>
        <Routes>
          <Route exact path="/" element={<PeoplePage/>}></Route>
          <Route path="/menu-planner" element={<MenuPlannerPage/>}></Route>
        </Routes>
        {/* <PeoplePage></PeoplePage> */}
      </div>
    )
  }
}

export default App;