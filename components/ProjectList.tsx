import ProjectPreview from './ProjectPreview'
import {Project} from '../types/Project'

const ProjectList = ({projects} : {projects : Project[]}) => {
    return (
        <div>
            <h3 className={'text-indigo-500 font-bold text-xl'}>Project List</h3>
            <div className={'mt-3'}>
                {projects.map((project, index) => (
                    <ProjectPreview key={index} project={project} className={'mb-4'}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList