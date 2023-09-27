import ProjectsList from "@/components/projects/ProjectsList"

function ProjectsIndexPage(props) {
  return (
    <div className="container">
        <h1 className="heading heading--primary txt-center">Projects</h1>
        <ProjectsList projects={props.allProjects} type="project index page"/>
    </div>
  )
}

export default ProjectsIndexPage

export async function getStaticProps() {

    // Get project data
    const projectResults = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                projects {
                  nodes {
                    projectFields {
                      projectDescription
                      projectUrl
                      projectImage {
                        altText
                        mediaItemUrl
                      }
                    }
                    tags {
                        nodes {
                            name
                        }
                    }
                    title
                    slug
                    id
                  }
                }
              }`
        })
    })

    const projectData = await projectResults.json();
    const allProjects = projectData.data.projects.nodes;

    return {
        props: {
            allProjects
        }
    }

}