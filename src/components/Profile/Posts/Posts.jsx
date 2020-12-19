import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}  />)

    return (
        <div>
            <span>My posts</span>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                { postsElements}
            </div>
        </div>
    );
}

export default Posts;