import Profile from '../components/Profile'
import Education from '../components/Education'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/footer'
import ProjectList from '../components/ProjectList'
import {Project} from '../types/Project'
import staticProjects from '../data/projects.json'

const Home = ({projects} : {projects : Project[]}) => {
    return (
        <Layout>
            <div className="max-w-md m-auto mr-0 flex flex-col gap-5">
                <Header/>
                <div>
                    <Profile/>
                    <br/>
                    <Education/>
                </div>
                <Footer/>
            </div>
            <div className="max-w-md m-auto ml-0">
                <ProjectList projects={projects} />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const projects : Project[] = staticProjects.data
    return {props : {projects}}
}

export default Home
