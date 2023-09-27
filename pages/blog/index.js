import PostsList from "@/components/posts/PostsList"

function BlogIndexPage(props) {
  return (
    <div className="container">
        <h1 className="heading heading--primary txt-center">Blog posts</h1>
        <PostsList posts={props.recentPosts}/>
    </div>
  )
}

export default BlogIndexPage

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

    return {
        props: {
            recentPosts,
        }
    }

}