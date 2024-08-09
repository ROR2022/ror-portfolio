import React from 'react'
import BasicCard from '../BasicCard/BasicCard';
import { dataProjects } from '@/assets/dataProjects';

const headerText = `
As a Full-stack developer, I have worked on projects both independently and as part of teams, utilizing Git as a version control system and GitHub as a platform. These tools have enabled me to effectively collaborate with geographically distributed teams, facilitating the creation of branches for managing and distributing work among team developers.
`;

const Projects = () => {
  return (
    <div style={{width:'90vw'}} className='ms-auto me-auto mt-5'>
        <div className='text-sm text-justify'>
            {headerText}
        </div>
        <div>
            <h3 className='text-center text-4xl my-5'>Projects Portfolio</h3>
            <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                {dataProjects.map((dataCard, index) => (
                    <BasicCard key={dataCard.id} dataCard={dataCard} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects