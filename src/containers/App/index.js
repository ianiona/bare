import React from 'react';

import './App.scss';

import ServicesPage from '../ServicesPage';
import StreamingPage from '../StreamingPage';
import CalendarPage from '../CalendarPage';

class App extends React.Component {

  constructor(props){
    super(props);

    this.page = props.element.getAttribute('data-name');

  }


  render() {

    return (
      <div className="App" >
          {this.getPage()}
      </div>
    );
  }

  getPage() {
    switch(this.page){
        case 'streaming':
            return <StreamingPage/>;
        case 'calendar':
            return <CalendarPage/>;
        default:
            return <ServicesPage/>
    }
  }
}

export default App;
