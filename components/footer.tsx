import { AiOutlineGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <div className={'text-center border-t border-slate-300 p-4'}>
            <div className="text-slate-400">
                Designed and built by Basanta
                <div className={'flex justify-center'}>
                    <AiOutlineGithub size={24}/>
                </div>
            </div>
        </div>
    )
}

export default Footer