import {NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'

const ProjectDetail : NextPage = () => {
    return (
        <div>
            <div className={'relative w-100 h-60'}>
                <Image src={'/coding.png'} layout={'fill'}/>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus ea laudantium reprehenderit repudiandae similique ut velit vero.
                Dolorum eligendi id iusto laudantium nesciunt nostrum quasi. Aut consectetur cumque iste modi non.
                Maiores minima nihil quas quos! Assumenda autem corporis dignissimos distinctio,
                dolores incidunt, laboriosam laborum molestias necessitatibus provident quis voluptate!
            </div>
            <div className={'mt-6'}>
                <Link href={'/'}>
                    <a className={'font-bold underline hover:text-indigo-600'}>Back</a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectDetail