import Image from "next/image"
import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-2 w-full md:w-3/4">
      <p className='text-2xl'>
      I am a passionate Full-Stack Developer with a knack for transforming complex requirements into seamless digital experiences.
      </p>
      <div className='flex flex-col md:flex-row justify-center items-center gap-3 my-5'>
        <Image
          src='/rorProfile1.jpg'
          alt='hero'
          width={30}
          height={30}
          sizes='(max-width: 30vw) 100vw, 30vw'
          style={{
            width: '30vw',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '50%',
          }} />
        <div style={{width:'100%'}}>
        <p className='text-sm mt-4 hidden'>Skills</p>
        <ul className=' text-sm me-auto ms-auto text-center' style={{width:'100%'}}>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Nest.js</li>
          <li>Next.js</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
        </ul>
        <p className='text-sm mt-5'>
        My passion for web development and commitment to continuous improvement have led me to specialize in these key areas of modern development.
        </p>
        </div>
      </div>
      <div className='text-center mb-5'>
      <Link href='/contact'
      className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded'
      >
        
          Contact Me
        </Link>
        </div>
      </div>
  );
}

export default Home