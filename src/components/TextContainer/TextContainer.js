import React from 'react';
import './TextContainer.css';
import onlineIcon from '../icon/onlineIcon.png'

const TextContainer = ({users}) => {
  return (
    <div className="textContainer">
    
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )
}

export default TextContainer;