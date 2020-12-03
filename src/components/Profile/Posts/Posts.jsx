import cls from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post message="Hi, how are you" likesCount="10"/>
                <Post message="It's my first post" likesCount="5"/>
            </div>
        </div>
    );
}

export default Posts;