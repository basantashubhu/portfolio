import staticProjects from '../../../data/projects.json'

export default function handler(req : any, res : any) {
    res.json(staticProjects.data)
    res.end()
}