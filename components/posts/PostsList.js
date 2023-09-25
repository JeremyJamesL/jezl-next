function PostsList(props) { 
  
  const renderedPosts = (post) => {
    const dateToHumanReadable = new Date(post.date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return ( 
        <li>
            <article className="single-post">
                <h3 className="single-post__title"><a href={`/blog/${post.slug}`} className="link link--project">{post.title}</a></h3>
                <time className="single-post__date">{dateToHumanReadable}</time>
            </article>
        </li>

    )
  }

  return (
    <ul className="posts mb-2">
        {props.posts.map(post => renderedPosts(post))}
    </ul>
  )
}
export default PostsList