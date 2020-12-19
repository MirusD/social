import cls from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'

const Profile = (props) => {
    return (
        <div className={cls.profile}>
            <ProfileInfo />
            <Posts posts={props.state.posts}/>
        </div>    
    );
}

export default Profile;