import React from 'react';
import './commentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInfo: ''
        }
    }

    render() {
        return (
            <div className='commentSection'>
                {this.props.comments.map(comment => (
                    <div key={comment.id} className='comment'>
                        <div><strong>{comment.username}</strong></div>
                        <div className='commentText'>{comment.text}</div>
                    </div>
                ))}
                <div>
                    <form class='commentInput'>
                        <input
                        placeholder='Add a comment...'
                        type='text'
                        />
                    </form>
                </div>
            </div>
        )
    }

}
export default CommentSection;