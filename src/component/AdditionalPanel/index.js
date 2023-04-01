import React from "react";
import './additionalPanel.css';
import calculator from './images/calculator.svg';
import binocular from './images/binocular.svg';
import tool from './images/tool.svg';
import worker from './images/worker.svg';

export const AdditinalPanel = () => {
    return ( 
        <aside className="additional-panel">
            <button className="item">
                <img src={calculator} />
            </button>
            <button className="item">
                <img src={binocular} />
            </button>
            <button className="item">
                <img src={tool} />
            </button>
            <button className="item">
                <img src={worker} />
            </button>
        </aside>
     );
}
 
export default AdditinalPanel;