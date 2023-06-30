import React from 'react'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'
import Link from 'next/link'

function ProjectCard({title, image}) {
  return (
    <div className='m-4'>
      <h2 className='text-xl font-bold mb-3'>{title}</h2>
        <div className="content h-full w-full shadow-md shadow-[#585757]">
            <Image src={`/${image}`} alt='YouTube 2.0' width={600} height={540} className='thumbnail'/>
            <div className="faded">
                <div className="title">
                    <Link className='link' target="_blank" href="https://github.com/accodes21/YouTube-Clone">
                        <BsGithub/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard