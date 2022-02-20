import React from 'react';
import logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg';
import classes from './headermodule.css';

const header = () => {
  return(
      <header>
          <div className='container' id='header'>
                <div>
                    <img className={classes.logo} src={logo} alt='Logo' />
                </div>
                <div className='textRight'>
                    <img className={classess.reactLogo} src={reactLogo} alt='React' />

                    <strong>React</strong>
            
                </div>
          </div>
      </header>
  )
};

export default Header

