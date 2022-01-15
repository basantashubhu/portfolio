import {NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import staticProjects from '../../data/projects.json'
import {useRouter} from 'next/router'
import {Project} from '../../types/Project'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import Education from '../../components/Education'
import Footer from '../../components/footer'
import ProjectList from '../../components/ProjectList'
import Layout from '../../components/Layout'
import ProjectDescription from '../../components/ProjectDescription'

const ProjectDetail = ({project} : {project: Project}) => {
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
    const projects : Project[] = staticProjects.data
    const project : Project[] = projects.filter(project => project.slug === context.params.slug)
    return {props : {project : project[0]}}
}

export default ProjectDetail