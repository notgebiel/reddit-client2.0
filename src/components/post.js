import React from 'react';
import ReactDOM from 'react-dom/client';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h2 className="postTitle">Post title</h2>
                <button className="likeButton">like</button>
                <button className="dislikeButton">Dislike</button>
                <span id="post">"post"</span>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Post />);
export default Post;