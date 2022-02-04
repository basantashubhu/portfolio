import Image from 'next/image'
import Link from 'next/link'
import {Project} from '../types/Project'

const ProjectDescription = ({project} : {project : Project}) => {
    const {title, long_desc, images} = project
    return (
        <div>
            <div>
                <h3 className={'text-2xl font-bold'}>{title}</h3>
            </div>
            <div><p dangerouslySetInnerHTML={{__html: long_desc}}/></div> <br/>
            <div className={'h-72 relative'}>
                <Image src={images[0]} layout={'fill'}/>
            </div> <br/>
            <div>
                <Link href={'/'}>
                    <a className={'hover:color-indigo-500 underline font-semibold'}>Back</a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectDescription