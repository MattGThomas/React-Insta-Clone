import React from 'react';
import './commentSection.css'
import PropTypes from 'prop-types';
import Comment from '../CommentSection/Comment/Comment'

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

                <div className='likes'>
                    <div className='icons'>
                        <span className='far fa-heart fa-lg'></span>
                        <span className='far fa-comment fa-lg'></span>
                    </div>
                    <div className='numLikes'><strong>{this.props.likes} likes</strong></div>
                </div>

                {this.props.comments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                    />
                ))}

                {this.props.time}

                <div>

                    <form className='commentInput'>
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

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}
export default CommentSection;