function Tags(props) {
  const renderTags = (tag) => {
    return (
        <li className="tag">
            {tag.name}
        </li>
    )
  }

  return (
    <ul className="tags">
        {props.tags.nodes.map(tag => renderTags(tag))}
    </ul>
  )
}
export default Tags