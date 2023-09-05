import React from 'react'
import ProjectItem from './ProjectItem'
import moiImg from '../assets/moi.png'
import bookieImg from '../assets/bookie.png'
import maquetteImg from '../assets/maquette.png'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugit fuga quae iusto, tempore commodi hic nobis error, magnam expedita necessitatibus minima molestiae nesciunt qui debitis similique itaque illum id!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={moiImg} title='Moi app' />
            <ProjectItem img={bookieImg} title='Bookie app'/>
            <ProjectItem img={maquetteImg} title='Maquette app'/>
            
        </div>
    </div>
  )
}

export default Projects