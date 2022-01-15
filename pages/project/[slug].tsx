import staticProjects from '../../data/projects.json'
import {Project} from '../../types/Project'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import Layout from '../../components/Layout'
import ProjectDescription from '../../components/ProjectDescription'
import NotFound404 from '../../components/NotFound404'

const ProjectDetail = ({project} : {project?: Project}) => {
    if (!project) return <NotFound404 />
    return (
        <Layout>
            <div className="max-w-md m-auto flex flex-col gap-5">
                <Header/>
                <ProjectDescription project={project}/>
                <Footer/>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const data : Project[] = staticProjects.data
    const paths : object[] = data.map(project => ({params : {slug : project.slug}}))
    return {paths, fallback : true}
}

export async function getStaticProps(context : any) {
    let project : Project|null = null
    try {
        project = staticProjects.data.filter(project => project.slug === context.params.slug)[0]
    } catch (e) {}
    return {props : {project}}
}

export default ProjectDetail