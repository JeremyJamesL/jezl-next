import parse from 'html-react-parser';

function SinglePost(props) {
  
  const postMeta = props.postData;
  const humanReadableDate = new Date(postMeta.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  
  return (
    <div className="container">
        <article className="article">

            <section className="article__header">
                <h1 className="article__title">{postMeta.title}</h1>
                <div className="article__date_tags">
                    <time className="article__date">{humanReadableDate}</time>
                    <span className="article__tags">
                        <ul className="tags">
                            {postMeta.categories.nodes.map(tag => <li className="tag">{tag.name}</li>)}
                        </ul>
                    </span>
                </div>
            </section>

            <section className="article__body">
                {parse(postMeta.content)}
            </section>
        </article>

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

export async function getStaticProps(context) {

        // Get single WP post  
        const data = await fetch(process.env.WORDPRESS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                    post(
                      idType: SLUG
                      id: "${context.params.postSlug}"
                    ) {
                      title
                      slug
                      date
                      content
                      categories {
                        nodes {
                          name
                        }
                      }
                    }
                  }`
            })
        });
        const post = await data.json();

        return {
            props: {
                postData: post.data.post
            }
        }
}

export default SinglePost;
