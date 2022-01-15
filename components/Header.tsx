import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={'text-center border-b border-slate-300 p-4'}>
            <div className="bg-slate-100 w-32 h-32 inline-block rounded-full overflow-hidden">
                <img alt={'avatar'} src={'/me.jpg'} style={{objectFit : 'cover', width : '100px', height : '110px', transform: 'scale(3)'}}/>
            </div>
            <div className="text-2xl font-bold">Basanta Tajpuriya</div>
            <div className="text-gray-500">FullStack Web Developer</div>
            <div className={'flex justify-center gap-4 text-gray-500 text-sm'}>
                <div className="flex gap-1 items-center">
                    <BsTelephone size={16} />
                    <Link href={'tel:+9779817916444'}>
                        <a>(+977) 9817916444</a>
                    </Link>
                </div>
                <div className="flex gap-1 items-center">
                    <AiOutlineMail size={16}/>
                    <Link href={'mailto:callmebasanta44@gmail.com'}>
                        <a>callmebasanta44@gmail.com</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header