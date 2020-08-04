import React from 'react';
import './Model.css';

const Model = (props) => {
    return (
        <div className="model-container">
            <div className="backCover" onClick={props.closeMode}></div>
            <div className="model">
                <div className="model-header">{props.title}</div>
                <div className="model-body">
                    {props.children}
                </div>
            </div>
        </div>
      );
}
export default Model;