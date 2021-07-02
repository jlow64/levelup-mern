import React from 'react';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='proj-row-1'>
                <button className='level-button' type='button'>Beginner</button>
                <button className='level-button' type='button'>Intermediate</button>
                <button className='level-button' type='button'>Advanced</button>
                <button className='level-button' type='button'>Professional</button>
            </div>
            <div className='proj-row-2'>
                <h4 className='LO-label'>Learning Objectives</h4>
                <div className='LO-container'>
                    <div className='beginner-section'>
                        Beginner
                    </div>
                    <div className='skill-section'>
                        Skills
                    </div>
                </div>
            </div>
            <div className='proj-row-3'>
                <h4 className='proj-label'>My Next Project</h4>
                <div className='project-accordion'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13C1 6.37258 6.37258 0.999999 13 0.999999C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13Z" stroke="#646464" stroke-width="2"/>
                        <path d="M14.8 17.8L10 13L14.8 8.20005" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <button className='square-card-orange' type='button'>Project 13</button>
                    <button className='square-card-orange' type='button'>Project 14</button>
                    <button className='square-card-orange' type='button'>Project 15</button>
                    <button className='square-card-orange' type='button'>Project 16</button>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="#646464" stroke-width="2"/>
                        <path d="M11.2 8.19995L16 13L11.2 17.8" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='proj-row-4'>
                <div className='project-accordion'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13C1 6.37258 6.37258 0.999999 13 0.999999C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13Z" stroke="#646464" stroke-width="2"/>
                        <path d="M14.8 17.8L10 13L14.8 8.20005" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <button className='square-card-purple' type='button'>Project 13</button>
                    <button className='square-card-purple' type='button'>Project 14</button>
                    <button className='square-card-purple' type='button'>Project 15</button>
                    <button className='square-card-purple' type='button'>Project 16</button>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="#646464" stroke-width="2"/>
                        <path d="M11.2 8.19995L16 13L11.2 17.8" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Projects;