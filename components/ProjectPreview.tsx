import Image from 'next/image'
import Link from 'next/link'

const ProjectPreview = () => {
    const title : string = 'Data Analysis App'
    const desc : string = 'Processes data in Python'
    return (
        <div className={'flex gap-4'}>
            <div className={'relative w-24 h-16'}>
                <Image src={'/coding.png'} layout={'fill'}/>
            </div>
            <div className={'my-auto'}>
                <Link href={'/project_detail'}>
                    <a className={'font-bold underline hover:text-indigo-600'}>{title}</a>
                </Link>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default ProjectPreview