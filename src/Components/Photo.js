import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
            <li>
                <img src={props.url} alt="" />
            </li>
        )
    }
};

export default Photo;