import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import FuzzyText from '../FuzzyText/FuzzyText'
function Home() {
    return (
        <>
            <div className='flex justify-center gap-[32px] w-fit items-center'>
                <div className='flex flex-col'>
                    {/* <h2 className=" font-bold"> */}
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={0.5}
                            enableHover={false}
                        >
                        Hey there! I’m Krishna
                        </FuzzyText>
                    {/* </h2> */}
                    <p className="mt-2 text-white">Frontend Developer | React Enthusiast | Exploring Java, AI & Web3</p>

                </div>
                <ProfileCard
                    name="Krishna"
                    title="Software Engineer"
                    handle="Krishna."
                    status="Online"
                    contactText="Contact"
                    avatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                    showUserInfo={true}
                    miniAvatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                    enableTilt={true}
                    grainUrl="https://i.pinimg.com/736x/ba/16/3b/ba163b33fa05dd0f72cbd1aae89a0892.jpg"
                    enableMobileTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </>
    )
}

export default Home
