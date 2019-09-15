import React from 'react';
import './background.scss';

export default function Background({currentPage}) {
    return (
        <div className="background">
            <div className="background-image-container">
                <figure className="background-image"></figure>
            </div>
            <div className="background-content">
                <h2 className="background-title">Paul's Portfolio</h2>
                <p className="background-description">Front-End Developer - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sit laborum laboriosam. Expedita eligendi dicta sapiente praesentium possimus earum corrupti.</p>
            </div>
        </div>
    )
}