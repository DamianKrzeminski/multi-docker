import React from 'react';
import { Link } from 'react-router-dom';

function otherpage(){
    return (
        <div>
            Im some other page
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default otherpage;
