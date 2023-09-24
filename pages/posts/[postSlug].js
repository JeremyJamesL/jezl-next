function SinglePost(props) {
  return (
    <div>
        single post
    </div>
  )
}

export async function getStaticPaths() {
    const data = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                posts {
                    nodes {
                        slug
                    }
                }
            }`
        })
    });

    const paths = await data.json();
    // console.log(paths.data.posts.nodes, 'logging paths')
    const pathsAsProps = paths.data.posts.nodes.map((item) => {
        return {
            params: {
                postSlug: item.slug
            }
        }
    })

    return {
        paths: pathsAsProps, 
        fallback: 'blocking'
    }
}

export async function getStaticProps() {
        // Get single WP post

}


export default SinglePost;

