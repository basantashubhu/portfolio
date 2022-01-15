import staticProjects from '../../../data/projects.json'

export default function handler(req : any, res : any) {
    const {slug} = req.query
    const projects = staticProjects.data.filter(project => project.slug === slug)
    if (projects.length === 0) {
        return res.status(404).json({message : 'Project not found'})
    }
    res.json(projects[0])
    res.end()
}