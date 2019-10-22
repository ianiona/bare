import React from 'react'

class StreamingPage extends React.Component{

  constructor(props){
    super(props);
    this.state= {}
  }

  componentDidMount(){
    console.log(window.location);
  }


  render(){
    return (
      <div><h1> This is streaming page</h1></div>
    )
  }

}

export default StreamingPage;
