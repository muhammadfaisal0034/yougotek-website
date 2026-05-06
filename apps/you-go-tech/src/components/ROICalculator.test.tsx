import { render, screen, fireEvent } from '@testing-library/react'
import { ROICalculator } from './ROICalculator'
import { expect, test, vi } from 'vitest'

test('updates yearly savings when hours slider is moved', () => {
  render(<ROICalculator />)
  
  // Find the slider (input range)
  const slider = screen.getByRole('slider')
  
  // Verify initial state (40 hours default)
  // 40 * 50 * 52 = 104,000. 70% = 72,800
  expect(screen.getByText(/\$72,800/)).toBeInTheDocument()
  
  // Move slider to 100 hours
  // 100 * 50 * 52 = 260,000. 70% = 182,000
  fireEvent.change(slider, { target: { value: '100' } })
  
  // Verify updated state
  expect(screen.getByText(/\$182,000/)).toBeInTheDocument()
})
