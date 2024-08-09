import React from 'react'
import BasicCard from '../BasicCard/BasicCard';
import { dataProblemSolution } from '@/assets/dataProjects';


const headerText = `My main knowledge and skills are as follows:

Front-end Development:

Advanced experience in React.js for building dynamic and responsive user interfaces.
Familiarity with useContext for application state management.
Proficiency in HTML5, CSS3, and JavaScript (ES6+).
Experience with Responsive Design and CSS frameworks like Bootstrap or Material-UI.

Back-end Development:

Experience in Node.js and Express.js for building and managing RESTful APIs.
Knowledge of SQL databases (such as MySQL) and NoSQL databases (such as MongoDB).
Experience in implementing authentication and authorization using JWT, OAuth, etc.

DevOps and Deployment:

Familiarity with Docker and Kubernetes for application containerization and orchestration.
Experience in configuring and managing CI/CD environments using tools like  GitHub Actions.
Knowledge of cloud services like AWS and Google Cloud Platform.

Additional Skills:

Best practices in Version Control with Git.
Experience using RESTful APIs.
Ability to efficiently solve problems and write clean, maintainable code.
Teamwork and collaboration skills, using agile methodologies like Scrum.

I am constantly learning and adapting to new technologies and best practices to improve my skills and add value to my projects.
`;


const Solution = () => {
  return (
    <div style={{width:'90vw'}} className='ms-auto me-auto mt-5'>
        <div className='text-sm text-justify'>
            {headerText}
        </div>
        <div>
            <h3 className='text-center text-4xl my-5'>Problem Solution</h3>
            <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                {dataProblemSolution.map((dataCard, index) => (
                    <BasicCard key={dataCard.id} dataCard={dataCard} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Solution