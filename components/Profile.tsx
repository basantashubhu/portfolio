import {FaPhp, FaNode, FaLaravel, FaReact} from 'react-icons/fa'
import {SiNextdotjs, SiMysql, SiSqlite, SiMongodb, SiExpress, SiFirebase} from 'react-icons/si'
import List from './List'

const Profile = () => {
    return (
        <div>
            <div className="text-xl font-bold text-indigo-500">About Me</div>
            <div className="">
                <p>I am full stack web developer with the experience of more than 3 years
                    with a keen knowledge of new technologies. I like to help beginners with basic programming issues.</p>
                <p>I love coding &lt;3</p>
            </div>
            <List className={'mt-3'} name={'Languages'}>
                <FaPhp size={40} color={'#7377ad'} title={'PHP'} />
                <FaNode size={40} color={'#6fa560'} title={'Node.js'} />
            </List>
            <List className={'mt-3'} name={'Frameworks'}>
                <FaLaravel size={30} color={'#e8392c'} title={'Laravel'} />
                <FaReact size={30} color={'#7ad9f7'} title={'React'} />
                <SiExpress size={30} color={'#6fa560'} title={'Express'} />
                <SiNextdotjs size={30} title={'Next.js'} />
            </List>
            <List className={'mt-4'} name={'Databases'}>
                <SiFirebase size={30} color={'#f7a00e'} title={'Firebase'} />
                <SiMysql size={40} color={'#005e86'} title={'MySQL'} />
                {/*<SiSqlite size={30} color={'#023952'} title={'SQLite'} />*/}
                <div className="flex items-center">
                    <SiMongodb size={24} color={'#4bac3e'} title={'MongoDB'} />
                    <small style={{color: '#4bac3e'}}>mongoDB</small>
                </div>
            </List>
        </div>
    )
}

export default Profile