function Comments({comment}) {

    return (
       <li className="comment-list">
        <br></br>
        <div className="comment">
        <h3>{comment['author']}</h3>
        <p>{comment['body']}</p>
        <p>{comment['votes'] >= 0 ? `${comment['votes']} 👍` : `${comment['votes']} 👎`}</p>
        <br></br>
        </div>
       </li>
    )
}

export default Comments