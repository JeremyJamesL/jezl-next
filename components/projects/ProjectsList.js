import Image from "next/image";
import Tags from "../UI/Tags";

function ProjectsList(props) {
  const renderedProjects = (project) => {
    return (
      <li>
          <article className="single-project">
              <Image
                  src={project.projectFields.projectImage.mediaItemUrl}
                  width={250}
                  height={177}
                  alt={project.projectFields.projectImage.altText}
                  className="single-project__img"
              />
              <h3 className="single-project__title"><a href={project.projectFields.projectUrl} className="link link--project">{project.title}</a></h3>
              <p className="paragraph">{project.projectFields.projectDescription}</p>
              {props.type === 'project index page' && 
                  <Tags tags={project.tags}/>
              }
          </article>
      </li>
    )
  }
  return (
    <ul className="projects mb-5">
        {props.projects.map(project => renderedProjects(project))}
    </ul>
  )
}
export default ProjectsList