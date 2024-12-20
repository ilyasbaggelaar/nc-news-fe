import React, { useState } from "react";

function Comments({ comment, handleDelete }) {
  const isUserComment = comment["author"] === "jessjelly";

  const handleDeleteClick = () => {
    const text = "Are you sure you want to delete your comment?";

    if (window.confirm(text)) {
      handleDelete(comment.comment_id)
    } else {
    }
  };

  return (
    <li className="comment-list">
      <br></br>
      <div className="comment">
        <h3>{comment["author"]}</h3>
        <p>{comment["body"]}</p>
        <p>
          {comment["votes"] >= 0
            ? `${comment["votes"]} 👍`
            : `${comment["votes"]} 👎`}
        </p>
        {isUserComment && (
          <button
            className="delete-button"
            onClick={handleDeleteClick}
            disabled={comment.isDeleting}
          >
            {comment.isDeleting ? (
              "deleting..."
            ) : (
              <span class="material-symbols-outlined">delete</span>
            )}
          </button>
        )}
        <br></br>
      </div>
    </li>
  );
}

export default Comments;
