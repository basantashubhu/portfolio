import type { NextPage } from 'next'
import Profile from '../components/Profile'
import ProjectPreview from '../components/ProjectPreview'

const Home: NextPage = () => {
    return (
        <div>
            <Profile/>
            <ProjectPreview/>
        </div>
    )
}

export default Home
