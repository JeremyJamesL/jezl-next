import Link from "next/link";
import HeadSEO from "@/components/data/HeadSEO";
import SEO from "@/components/data/SEO";
import PostsList from "@/components/posts/PostsList";
import ProjectsList from "@/components/projects/ProjectsList";

function Homepage({recentPosts, featuredProjects}) {
    
    return (
        <div className="container">
            <HeadSEO title="Homepage" description={SEO.description}/>
            <section>
                <h1 className="heading heading--primary">Hello, i'm Jeremy James 👋</h1>
                <p className="paragraph">I'm a solutions engineer and self-taught web dev, currently working at <a href="https://algolia.com">Algolia</a>.</p>
                <p className="paragraph">I write here mainly for myself, so I can clarify my thoughts and keep a log of my learnings and for a place to show the mini projects I work on.</p>
                <p className="paragraph">In my spare time I like learning chess gambits (Evans gambit is my favourite) and theory, solo bike touring (best way to see the world). Currently learning Italian 🇮🇹 </p>
            </section>
            <hr />

            <section>
                <h2 className="heading heading--secondary">Latest blog posts</h2>

                {/* Wordpress posts go here */}
                <PostsList posts={recentPosts} />

                <div className="txt-center"><Link href="/projects" className="link link--project">👉 See all blog posts</Link></div>
                
            </section>

            <hr />

            <section>
                <h2 className="heading heading--secondary">Featured projects</h2>
                {/* Wordpress projects go here */}
                <ProjectsList projects={featuredProjects} />
                <div className="txt-center"><Link href="/projects" className="link link--project">👉 See all projects</Link></div>
            </section>

        </div>
    )
}

export default Homepage;

export async function getStaticProps() {

    // Get WP blog posts
    const blogResults = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                posts {
                    nodes {
                      slug
                      title
                      date
                      id
                    }
                  }
            }`
        })
    });

    const blogData = await blogResults.json();

    const recentPosts = blogData.data.posts.nodes;

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
                    title
                    slug
                    id
                  }
                }
              }`
        })
    })

    const projectData = await projectResults.json();
    const featuredProjects = projectData.data.projects.nodes;

    return {
        props: {
            recentPosts,
            featuredProjects
        },
        revalidate: 60
    }

}