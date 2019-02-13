import React, {Component} from 'react'
import './App.css'

class App extends Component
{
render()
{
  return(

    <div align='center'>

      <Counter />
   
    </div>

    )
}


}
export default App

class Counter extends Component
{   
  state={Zero:0,Num:0,INum:100}

   constructor(props)
  {
    super(props)
    this.ops = this.ops.bind(this);
    this.text = this.text.bind(this);
    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }
    
  text=(event)=> 
  {
    console.log(event.target.value) 
  }

  Change=(event)=> 
  {
    this.setState({value: event.target.value});
  }

  Submit=(event)=>
  {
    this.setState({Num:this.state.value})
    event.preventDefault();
  }

  ops=(c)=>
  {
    if(c==="Up")
    {
      this.setState({Num:this.state.Num+1})
    }
    else if(c==="Down")
    {
      this.setState({Num:this.state.Num-1})
    }
    else if(c==="Reset")
    {
      this.setState({Num:this.state.Zero})
    }
    
  }

render()
{   
  
  return(

    <div align='center' stype="background-color:red">

    <h1> Counter App </h1>
        <h2>Counter : {this.state.Num} </h2> 

        <form onSubmit={this.Submit}>
        <label>
          Enter Number :
          <input type="text" value={this.state.value} onChange={this.Change} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
        <button onClick={()=> this.ops('Up')}>Up</button>
        <button onClick={()=> this.ops('Down')}>Down</button>
        <button onClick={()=> this.ops('Reset')}>Reset</button>
        
    </div>
 
          )}

}

