import React from 'react';
// import CommentSection from './CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
        CommentSection
            id ={props.data.id} 
            comments ={props.data.comments}
        />
        </div>
    )
}

export default PostContainer;