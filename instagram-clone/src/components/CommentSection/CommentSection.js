import React from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInfo: ''
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map(comment => (
                    <div key={comment.id}>
                        <strong>{comment.username}</strong>
                        {comment.text}
                    </div>
                ))}
                <div>
                    <form>
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