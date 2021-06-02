import React, { Component } from 'react'
import SignUpForm from '../../Components/SignUpForm'
import { Button, ButtonToolbar } from 'react-bootstrap'


export default class Signupbutton extends Component {

    constructor(props) {
        super(props);
        this.state = { st: [], addModalShow: false }
    }
    render() {
        const { st } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
                 <img className='pic' src='/images/studentnew.png' alt="student"></img>
                 
                <div className="banner">
                <Button className='btn'
                        onClick={() => this.setState({ addModalShow: true })}>Student</Button>
                    <SignUpForm show={this.state.addModalShow}
                        onHide={addModalClose}></SignUpForm>
                        </div>
                           </div>
                        
                   
        )
    }
}