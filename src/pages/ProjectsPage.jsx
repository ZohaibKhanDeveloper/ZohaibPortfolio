import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectsDetail from "./ProjectsDetail";
const ProjectsPage = () => {
    return (
        <div className="container">
            <Header />
            <Navbar />
            {
                ProjectsDetail.map((project)=>{
                    return <ProjectCard title={project.title} description={project.description} project_type={project.project_type} status={project.status} repo_link={project.repo_link}/>
                })
            }
        </div>
    )
}
export default ProjectsPage;