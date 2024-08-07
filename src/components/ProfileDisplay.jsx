'use client'

import React, { useEffect, useState } from 'react'
import { FaLink } from 'react-icons/fa6'

const ProfileDisplay = ({ data, loading, setLoading }) => {
	const [followers, setFollowers] = useState(null)
	const [following, setFollowing] = useState(null)

	const followersUrl = data[0]?.followers_url

	const username = data[0].login

	useEffect(() => {
		if (data) {
			handleFollowers()
		}
	}, [data])

	const handleFollowers = async () => {
		const resFollowers = await fetch(followersUrl)

		const followerData = await resFollowers.json()

		setFollowers(followerData?.length)

		const resFollowing = await fetch(
			`https://api.github.com/users/${username}/following`
		)

		const followingData = await resFollowing.json()

		setFollowing(followingData?.length)
	}

	return (
		<div>
			<div className=' mt-[2rem] grid justify-items-center'>
				{data.map((profile) => (
					<div
						className=' grid justify-items-center'
						data-testid='profile'
						key={profile.id}
					>
						<img
							src={profile.avatar_url}
							height={100}
							width={100}
							alt=''
							loading='lazy'
							className=' rounded-full border-2 p-[0.2rem] border-[#1751D0]'
						/>
						<p className=' text-center font-semibold text-xl mt-[0.5rem]'>
							{profile.login}
						</p>
						<p className=' text-center text-gray-600 font-medium'>
							{profile.type}
						</p>
						<a
							href={profile.html_url}
							className=' text-[#1751D0] font-medium bg-[#1752d027] flex items-center gap-2 mt-[0.5rem] py-[0.2rem] px-[0.3rem] rounded-md max-md:text-sm text-center'
							target='_blank'
							rel='noreferrer'
						>
							<FaLink />
							{profile.html_url}
						</a>

						<div className=' text-center my-[1rem] py-[1rem] border-y border-gray-400 flex w-[20rem] gap-5 justify-center max-md:w-[90vw]'>
							<div className=''>
								<p className=' text-xl font-medium'>{followers}</p>
								<p className=' text-sm text-gray-600'>Followers</p>
							</div>
							<div className=''>
								<p className=' text-xl font-medium'>{following}</p>
								<p className=' text-sm text-gray-600'>Following</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProfileDisplay
