import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Welcome to the Trivia Challenge/i)
  expect(linkElement).toBeInTheDocument()
})
