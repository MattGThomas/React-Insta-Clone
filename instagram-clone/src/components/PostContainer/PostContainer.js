import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.css';

const PostContainer = props => {
    return (
        <div className='post'>
        <CommentSection
            id={props.data.id} 
            comments={props.data.comments}
        />
        </div>
    )
}

export default PostContainer;