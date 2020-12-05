import cls from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={cls.profileInfo}>
            <div>
                <img src="https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo