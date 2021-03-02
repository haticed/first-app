import React from 'react'


export default function kimlik(props) {
    console.log(props)
      return(
          <div>
              {props.children}
              <p>
                  isim:{props.name}
              </p>
              <p>
                  Soyisim: {props.surname}
              </p>
          </div> 
      )
     
   

}
//rfc