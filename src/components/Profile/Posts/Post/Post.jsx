import cls from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cls.post}>
            <div className={cls.avatar}>
                <img src="https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"/>
            </div>   
            <div className={cls.message}>
                {props.message}
            </div>
            <div className={cls.like}>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;