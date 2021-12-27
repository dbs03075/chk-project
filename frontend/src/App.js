import React from 'react';
import Sidebar from './components/sidebar/sidebar.component';
import PeoplePage from './screens/people-page/people-page.screen';
import './App.css';

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
      <PeoplePage></PeoplePage>
    </div>)
  }
}

export default App;