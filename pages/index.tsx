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
            <div className="xl:w-1/2 lg:w-2/3 md:w-full m-auto">
                <div className="px-3">
                    <Header/>
                    <div className="md:flex-row flex-col flex gap-5">
                        <div className="w-full md:w-1/2">
                            <Profile/>
                            <br/>
                            <Education/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ProjectList projects={projects} />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const projects : Project[] = staticProjects.data
    return {props : {projects}}
}

export default Home
