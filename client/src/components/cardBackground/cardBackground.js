import React from 'react';
<<<<<<< HEAD

const cardBackground = ({children}) =>{
    <div style = {{height:180}} className = 'cardBackground'>
        {children}
    </div>;
}
   
export default cardBackground; 
=======
import background from '../../assets/connection.jpg';
export const CardBackground = (props) => {
    return(
    <div>
        <img src={background}  alt="sup" ></img>
    </div>
)};
   
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
