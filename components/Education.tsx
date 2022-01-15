import Image from 'next/image'
import softwaricaImg from '../public/softwarica-college.png'
import modelcampusImg from '../public/Model-Campus-Damak.jpg'

const Education = () => {
    return (
        <div>
            <div className="text-xl font-bold text-indigo-500">Education</div>
            <div className={'mt-2 flex items-center justify-between gap-4'}>
                <div>
                    <p className={'font-semibold'}>Bachelor in Information Technology</p>
                    <p className={'font-bold'}>Softwarica college of IT and E-commerce</p>
                    <small>2016 - 2021</small>
                </div>
                <div className={'relative flex-1 h-8'}>
                    <Image src={softwaricaImg} layout={'fill'} />
                </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                    <div className={'mt-4'}>
                        <p className={'font-semibold'}>High School</p>
                        <p className={'font-bold'}>Model Campus Damak</p>
                        <small>2014 - 2015</small>
                    </div>
                </div>
                <div className={'relative w-16 h-16'}>
                    <Image src={modelcampusImg} layout={'fill'} />
                </div>
            </div>
        </div>
    )
}

export default Education