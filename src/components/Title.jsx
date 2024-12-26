import React, { useEffect } from 'react';

const Title = (title) => {
    useEffect(()=>{
        document.title = `${title} | eTutor`
    },[])
};

export default Title;