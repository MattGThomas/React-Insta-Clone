import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.css';
// import Post from '../PostContainer/PostFolder/Post'

const PostContainer = props => {
    return (
        
         <div className='post'>
            <div className='postHeader'>
                <img src={props.data.thumbnailUrl}/>
                <strong>{props.data.username}</strong>
            </div>

            <div className='postImage'>
                <img src={props.data.imageUrl}/>
            </div> 

            <CommentSection
                likes={props.data.likes}
                id={props.data.id} 
                comments={props.data.comments}
                time={props.data.timestamp}
            />

        </div>
    )
}

export default PostContainer;