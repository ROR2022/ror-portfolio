import React from 'react'
import BasicCard from '../BasicCard/BasicCard';
import { dataCertifications } from '@/assets/dataProjects';

const headerText = `I seek new opportunities to utilize and expand my skills in a dynamic and collaborative work environment. I am proficient in Node.js, React.js, Next.js, and Nest.js, and I am looking for projects involving these technologies. My passion for web development and commitment to continuous improvement have led me to specialize in these key areas of modern development.
I am interested in collaborating remotely, either permanently or per project, with national or international companies. I firmly believe in the potential of remote work to connect with diverse teams and work on challenging projects regardless of geographic location. My goal is to contribute my skills and knowledge to innovative and high-impact projects.
`;

const Certifications = () => {
  return (
    <div style={{width:'90vw'}} className='ms-auto me-auto mt-5'>
        <div className='text-sm text-justify'>
            {headerText}
        </div>
        <div>
            <h3 className='text-center text-4xl my-5'>Certifications</h3>
            <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                {dataCertifications.map((dataCard, index) => (
                    <BasicCard key={dataCard.id} dataCard={dataCard} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Certifications