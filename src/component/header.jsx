import React from "react"
import PropTypes from 'prop-types'
const Header = ({text,bgColor,textColor}) => {
    const headerstyle={
        backgroundColor:bgColor,
        color:textColor,

    }
    return ( 
        <header style={headerstyle}>
            <div className="container">
                <h2 className="header-text">{text}</h2>
            </div>
           
        </header> 
    );
}
Header.defaultProps ={
    text: 'feedback ui',
    bgColor: 'grey',
    textColor:'black',
}
Header.propTypes ={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}
 
export default Header;