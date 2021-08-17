import React from 'react';

//displayed when search does not have results
const NotFound = () => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results.</p>
        </li>
    )
};

export default NotFound;