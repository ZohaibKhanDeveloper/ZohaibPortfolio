const ProjectsCard = ({ title, description, project_type, repo_link, status }) => {
    return (
        <div className="project-card">
            <ol>
                <li className="project-title">
                    <h3><i style={{color:"white"}}class="bi bi-code-slash"></i> {title} {status == "Completed" ? <i style={{ color: "lime" }} class="bi bi-check-circle-fill"></i> : <i style={{ color: "rgba(255,255,0,0.8)" }} class="bi bi-pc-display-horizontal"></i>}</h3>
                    <ul>
                        <li><h4>Description</h4></li>
                        <li><p>{description}</p></li>
                        <li><a href={repo_link} target="_blank"><i className="bi bi-github"></i> Github Repository</a> | {project_type} | {status}</li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}
export default ProjectsCard;