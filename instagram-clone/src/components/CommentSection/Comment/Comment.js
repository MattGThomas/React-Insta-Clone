import React from 'react';

const Comment = props => {
    return (
        <div className='comment'>
            <div><strong>{props.comment.username}</strong></div>
            <div className='commentText'>{props.comment.text}</div>
        </div>
    )
}





export default Comment;