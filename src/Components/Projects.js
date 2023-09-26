import React from 'react';
import Card from './Card';
import './Projects.css';
import { PData } from './Projectsdata';
const Projects = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>
                    Our Projects
                </h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div>
                            <div className='row gy-3 card-container'>
                                {
                                    PData.map((val, ind) => {
                                        return <Card
                                        title= {val.title} 
                                        description = {val.description}
                                        plink = {val.plink}
                                        imgsrc={val.imgsrc}
                                        />

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;