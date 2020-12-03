import cls from './Post.module.css';

const Post = (props) => {
    return (
        <div>   
            <div>
                {props.message}
            </div>
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;