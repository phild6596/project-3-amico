import React from 'react';

const cardBackground = ({children}) =>{
    <div style = {{height:180}} className = 'cardBackground'>
        {children}
    </div>;
}
   
export default cardBackground; 