import { describe, expect, it, beforeAll, afterAll, test, vi } from 'vitest'
import {
	render,
	cleanup,
	fireEvent,
	screen,
	waitFor,
	act,
} from '@testing-library/react'
import Search from '../../components/Search'

describe('Search', () => {
	it('should render input and button', () => {
		render(<Search />)
		expect(
			screen.getByPlaceholderText('Enter user or organization')
		).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
	})

	it('switches between searching for orgs and users', () => {
		render(<Search />)

		const organizationsRadio = screen.getByLabelText('orgs')
		const usersRadio = screen.getByLabelText('users')

		expect(usersRadio).toBeChecked()
		expect(organizationsRadio).not.toBeChecked()

		fireEvent.click(organizationsRadio)

		expect(organizationsRadio).toBeChecked()
		expect(usersRadio).not.toBeChecked()

		fireEvent.click(usersRadio)

		expect(usersRadio).toBeChecked()
		expect(organizationsRadio).not.toBeChecked()
	})
})
