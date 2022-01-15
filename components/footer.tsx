import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={'text-center border-t border-slate-300 p-4'}>
            <div className="text-slate-400">
                Designed and built by Basanta
                <div className={'flex justify-center'}>
                    <Link href={'https://github.com/basantashubhu'}>
                        <a><AiOutlineGithub size={24}/></a>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/basanta-tajpuriya-792574221/'}>
                        <a><AiFillLinkedin size={24}/></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer