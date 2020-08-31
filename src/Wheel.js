import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFastForward, faFastBackward, faPlay,faPause} from '@fortawesome/free-solid-svg-icons'


class Wheel extends React.Component{
    render(){
        return(
        
            <div className='wheel-cntnr'>
                <div className='circular-menu'>
                    <div className='menu-btn'>MENU</div>
                    <div className='frwd-btn'>                        
                        <FontAwesomeIcon icon={faFastForward} />
                    </div>
                    <div className='back-btn'>                        
                        <FontAwesomeIcon icon={faFastBackward} />
                    </div>
                    <div className='play-pause-btn'>                        
                        <FontAwesomeIcon icon={faPlay} />
                        <FontAwesomeIcon icon={faPause} />
                    </div>
                    <div className='middle-btn'></div>
                </div>
            </div>
        );
        
    }
}

export default Wheel;