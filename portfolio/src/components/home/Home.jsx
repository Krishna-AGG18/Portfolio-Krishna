import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

function Home() {
    return (
        <div>
            <ProfileCard
                name="Krishna"
                title="Software Engineer"
                handle="happycoding"
                status="Online"
                contactText="Contact Me"
                avatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                showUserInfo={true}
                miniAvatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => console.log('Contact clicked')}
            />
        </div>
    )
}

export default Home
