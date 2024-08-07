'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Octokit } from '@octokit/rest'
import Skeleton from './Skeleton'
import Search from './Search'
import ProfileDisplay from './ProfileDisplay'
import Error from './Error'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const ProfilePage = () => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)
	const [error, setError] = useState()

	const { type, profile } = useParams()

	useEffect(() => {
		handleSearch()
	}, [type, profile])

	const octokit = new Octokit({
		auth: import.meta.env.VITE_GITHUB_KEY,
	})

	const handleSearch = async () => {
		setLoading(true)

		try {
			const response = await octokit.request(`GET /search/users`, {
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
				q: `user:${profile}`,
			})

			console.log(response)

			setData(response.data.items)

			setLoading(false)
			setError(null)
		} catch (err) {
			if (err.status === 422) {
				setError(`Not found`)
			} else {
				setError('Failed to fetch!')
			}
			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className='h-[100vh]'>
			<Link
				to={'/'}
				className=' text-[#1751D0] font-semibold flex items-center w-[80vw] mx-auto mt-[2rem] max-md:w-[90vw]'
			>
				<IoIosArrowBack /> Back to home
			</Link>
			<div className=' h-[90vh] items-center flex justify-center '>
				<div className=''>
					{loading ? (
						<Skeleton />
					) : error ? (
						<div className=''>
							<Search header={`Search result for '${profile}'`} />
							<Error message={error} />
						</div>
					) : (
						<div className=''>
							<Search header={`Search result for '${profile}'`} />
							<ProfileDisplay
								data={data}
								loading={loading}
								setLoading={setLoading}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
