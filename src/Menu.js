import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component{
    render(){
        return(
            <div className='list-cntnr'>
                <div>Ipod.js</div>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        );
        
    }
}

export default Menu;