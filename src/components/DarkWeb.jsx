import React from 'react';

const DarkWeb = () => {

    const toggleTheme = e =>{
        if(e.target.checked){
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else{
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }
    return (
        <div className='wrapper'>
            {/* <label className="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                <span className="slider round"></span>
            </label> */}
            <input type="checkbox" onChange={toggleTheme} className="toggle theme-controller" />
        </div>
    );
};

export default DarkWeb;