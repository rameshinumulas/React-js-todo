import React from 'react';
import '../App.css';
import {MainData} from 'task1parent';


class Task extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search:'',
      disabled:true,
      ButtonCliked:false
    }
  }

  Showbutton = (e) =>{
    e.preventDefault();
    if(e.target.value.length>=1){
      this.setState({
        search:e.target.value,
        disabled:false,
        ButtonCliked:false
    })
  }else {
    this.setState({search:e.target.value,disabled:true,ButtonCliked:true})
  }
}

FunctionButton = ()=>{
  console.log('cliked');
  this.setState({ButtonCliked:true})
}



  render() {
    return(
      <div className="last-div">
      <div>
          <input type="text" name="country" value={this.state.search} onChange={(e) => this.Showbutton(e)} placeholder="enter country"/>
            <button type="button" className="btn-search" disabled={this.state.disabled} onClick={() => this.FunctionButton()} >Search</button>
            <div>
            {this.state.ButtonCliked ? <MainData HandleButton={this.Searchfalse} SearchItem={this.state.search} />:null}
            </div>
        </div>
      </div>

    )
  }
}


export {Task}
