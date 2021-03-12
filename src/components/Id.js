import React, { createElement } from 'react'
export default function kimlik(props) {

    const Id = () =>{
        return(
            <div>
                <h1>
                    Hatice Demir
                </h1>
            </div>
        )
// what is happening at the background of jsx format so you have to write always react.createelement 
        // return React.createElement(
        //     'div'
        //     {id:'Id', className:'box'},
        //     React.createElement(
        //         'h1',
        //         null,
        //         "Hatice Demir"

        //     )


        // )
    }
    export default Id 

}
//rfc