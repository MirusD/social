import cls from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={cls.profile}>
            <div>
                <img src="https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"/>
            </div>
            <div>
                ava + description
            </div>
            <Posts />
        </div>    
    );
}

export default Profile;