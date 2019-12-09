import React from 'react';

class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            firstName : '',
            lastName : '',
            email:'',
            phoneNumber: '',
            password:''

        }
    
    }
    handleFirstNameChange = e =>{
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = e =>{
        this.setState({
            lastName: e.target.value
        })
    }
    handleEmailChange =e=>{
        this.setState({
            email: e.target.value
        })
    }
    handlePhoneNumberChange = e =>{
        this.setState({
            phoneNumber: e.target.value
        })
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    handleFormSubmit = e => {
        console.log(`${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.phoneNumber} ${this.state.password}`)
        e.preventDefault()
    }
render(){
    const{firstName, lastName, email, phoneNumber,password} = this.state
    return(
        <div >
          <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                  <label>First Name </label>
                  <input type= 'text' className="form-control" placeholder='Enter Your First Name Here' name='firstName' value={firstName} onChange={this.handleFirstNameChange}></input>
              </div>
              
              <div className="form-group">
                  <label>Last Name </label>
                  <input type = 'text' className="form-control" placeholder='Enter Your Last Name Here' name='lastName' value={lastName} onChange={this.handleLastNameChange}></input>
              </div>
              
              <div className="form-group">
                  <label>Email</label>
                  <input type = 'email' className="form-control" placeholder='Enter Your Email Here' name='email' value={email} onChange={this.handleEmailChange}></input>
              </div>
              
              <div className="form-group">
                  <label>Phone Number</label>
                  <input type = 'tel' className="form-control" placeholder='Enter Your Phone Number Here' name='phoneNumber' value={phoneNumber} onChange={this.handlePhoneNumberChange}></input>
              </div>
              
              <div className="form-group">
                  <label>Password</label>
                  <input type = 'password'className="form-control" placeholder='Enter Your Password Here' name='password' value={password} onChange={this.handlePasswordChange}></input>
              </div>
              <br/>
              <center>
              <button className="btn btn-default btn-cus" type='submit'>Submit</button></center>
          </form>
        </div>
    )
}
}

export default Forms;