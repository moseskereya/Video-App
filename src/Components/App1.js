import React, { Component } from 'react';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onSubmitHandler = (e) =>{
        e.preventDefault()
        const getData = e.target.elements.getData.value
    }
    render() { 
        return ( 
            <div>
               <form onSubmit={this.onSubmitHandler}>
                   <label htmlFor="name">Name</label><br/>
                   <input type="text" name="getData" /><br/>
                   <label htmlFor="email ">E-mail Address</label><br/>
                   <input type="email" name="getData" /><br/>
                   <label htmlFor="password">password</label><br/>
                   <input type="password" name="getData" /><br/>
                   <button type="submit">submit</button>
               </form>
            </div>
         );
    }
}
 
export default App1;