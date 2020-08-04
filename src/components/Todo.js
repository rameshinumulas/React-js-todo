import React from 'react';
import '../App.css';

import FlipMove from "react-flip-move";
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';


class Todo extends React.Component{
  constructor(){
    super()
    this.state={
      items:[],
      currentIteam:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this)
    this.AddIteam=this.AddIteam.bind(this)
    this.DeleteItems=this.DeleteItems.bind(this)
    this.setUpdate=this.setUpdate.bind(this)


  }
  handleInput(e){
    this.setState({
      currentIteam:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  AddIteam(e){
    e.preventDefault();
    const newiteam=this.state.currentIteam;
    console.log(newiteam);
    if(newiteam!==""){
      const newIteams=[...this.state.items, newiteam];
      this.setState({
      items:newIteams,
      currentIteam:{
        text:'',
        key:''
      }
    })
    }
  }
  DeleteItems(key){
    const fliterItems = this.state.items.filter(two =>two.key!==key);
    console.log(fliterItems);
    this.setState({items:fliterItems})
  }
  setUpdate(text,key){
    const items=this.state.items;
    items.map(item=>{
    if (item.key===key){
      item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return(
      <div className="first-todo">
          <div className="second-input">
              <header >
              <p style={{color:'red',fontSize:18 ,fontFamily:"arial",textAlign:"center"}}>Hello all...</p>
              <p><marquee scrollamount="7"
                        direction="left"
                        behavior="scroll"
                        >
                  This is like a your note pad.. you can write whatever you want and edit and delete your text..
                  <br />
                  </marquee>
                  Here is text box... you can type whatever you want and click upload button..
                </p>
                
                  <form onSubmit={this.AddIteam} style={{display:"flex",flexWrap:" no wrap"}}>
                      <textarea type="text" className="todo-input" placeholder="Enter your text" value={this.state.currentIteam.text} onChange={this.handleInput} />
                      <Button variant="contained" color="secondary"  onClick={this.AddIteam} style={{height:50,marginTop:50}}>upload your text</Button>
                  </form>
              </header>
              <Listiteams items={this.state.items} DeleteItems = {this.DeleteItems} setUpdate={this.setUpdate}/>
          </div>

      </div>
    )
  }
}



function Listiteams(props){
        const items = props.items;
        const listData = items.map(one =>{
          return <div className="list-input" key={one.key}>
            <p style={{boxShadow: "2px 2px 2px 2px darkgrey"}}>
              <textarea type="text"
               placeholder="here you can edit also" 
               id={one.key} value={one.text} 
               onChange={(e)=>{props.setUpdate(e.target.value , one.key)}} 
               style={{fontSize:"20px",border:"0px"}}/>
            <DeleteIcon fontSize="large"  onClick={()=>{props.DeleteItems(one.key)}} style={{marginLeft:100}} />
            </p>  
            </div>
        })
        return(<div>
          <FlipMove duration={700} easing="ease-in-out">
          {listData}
          </FlipMove>
          </div>)
}

export {Todo};



