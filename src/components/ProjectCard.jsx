import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectCard({title}) {
  return (
    <>
        <h2>{title}</h2>
        <div className="container">
            <Image src={'/yt.png'} alt='YouTube 2.0'/>
            <div className="faded">
                <div className="title">
                    <Link target="_blank" href="https://github.com/accodes21/YouTube-Clone">
                        <FontAwesomeIcon icon={['fab', 'microsoft']} />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard