import Image from 'next/image'
import Link from 'next/link'
import {Project} from '../types/Project'

const ProjectPreview = ({project, className} : {project : Project, className ?: string}) => {
    const {slug, title, desc, images} = project
    return (
        <div className={'flex gap-4 ' + className}>
            <div className={'relative w-24 h-16'}>
                <Image src={images[0]} layout={'fill'}/>
            </div>
            <div className={'my-auto'}>
                <Link href={'/project/' + slug}>
                    <a className={'font-bold underline hover:text-indigo-500'}>{title}</a>
                </Link>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default ProjectPreview