'use client'

import { IoSearch } from 'react-icons/io5'
import Btn from './Btn'
import { Octokit } from '@octokit/rest'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router'

const Search = ({ header }) => {
	const [username, setUsername] = useState('')
	const [type, setType] = useState('users')
	const [isRoute, setIsRoute] = useState(false)

	const handleSearch = async (e) => {
		e.preventDefault()

		console.log('working')

		if (!username) {
			toast.error('Invalid search! Field must not be empty', {
				duration: 6000,
			})
		} else {
			setIsRoute(true)
		}
	}

	const handleChange = (event) => {
		setType(event.target.value)
	}

	return (
		<div className=' '>
			{isRoute && <Navigate to={`/search/${type}/${username}`} replace />}
			<form
				className='  w-[30rem] mx-auto max-md:w-[90vw]'
				onSubmit={handleSearch}
			>
				<h1 className=' font-bold text-center text-3xl text-[#1751D0] mb-[1rem] max-md:text-2xl'>
					{header}
				</h1>
				<div className='relative w-full'>
					<div className=' absolute top-[50%] bottom-[50%] left-[0.5rem] flex items-center text-xl'>
						<IoSearch />
					</div>
					<input
						type='text'
						aria-label='search'
						className=' w-full border border-black outline-none rounded-md pl-[2rem] pr-[1rem] py-[0.5rem] font-semibold placeholder:font-normal text-xl max-md:text-sm'
						// value={username}
						placeholder='Enter user or organization'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<div className=' absolute right-1 top-0 flex items-center bottom-0'>
						<Btn />
					</div>
				</div>

				<div className=' mt-[1rem] flex gap-6 justify-center'>
					<div className=' flex items-center gap-2'>
						<input
							type='radio'
							name='users'
							id='users'
							value={'users'}
							aria-label='users'
							checked={type === 'users'}
							onChange={handleChange}
						/>
						<label htmlFor='users' className=' text-xl font-medium'>
							User
						</label>
					</div>
					<div className=' flex items-center gap-2'>
						<input
							type='radio'
							aria-label='orgs'
							value={'orgs'}
							name='orgs'
							id='orgs'
							checked={type === 'orgs'}
							onChange={handleChange}
						/>
						<label htmlFor='orgs' className=' text-xl font-medium'>
							Organization
						</label>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Search
