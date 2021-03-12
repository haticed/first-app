import React from 'react'

import React, { Component } from 'react'


class Form extends Component{
    render(){
        return(
            <div>
                <form>
                    <h1>{this.props.header}</h1>
                    <input placeholder="enter name "/>
                    <button> Send</button>
                </form>
            </div>
        )
    }
} 
export default Form
// rcc "creates an class"