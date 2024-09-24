import { render, waitFor, fireEvent } from '@testing-library/react'
import axios from 'axios'
import Books from '.'

jest.mock('axios')

describe('Books Component', () => {
  const books = [
    { id: 1, name: 'Fake Book 1', author: 'Fake Artist 1', publishDate: '2021' },
    { id: 2, name: 'Fake Book 2', author: 'Fake Artist 2', publishDate: '2022' },
  ]

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render loading text initially', () => {
    const { getByText } = render(<Books />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('should fetch and display books after loading', async () => {
    axios.get.mockResolvedValueOnce({ data: books })
    
    const { getByText, queryByText } = render(<Books />)
    
    expect(queryByText('Fake Book 1 by Fake Artist 1')).not.toBeInTheDocument()
    
    await waitFor(() => {
      expect(getByText('Fake Book 1 by Fake Artist 1')).toBeInTheDocument()
    })
  })

  it.each([
    { data: []},
    { data: { record: [] } }
  ])('should fetch books with the correct URL', async (response) => {
    process.env.REACT_APP_BOOKS_API_URL = 'http://fake.url';

    axios.get.mockResolvedValueOnce(response)
    
    render(<Books />)
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://fake.url')
    })
  })

  it('should display the selected book details when a book is clicked', async () => {
    axios.get.mockResolvedValueOnce({ data: books })

    const { getByText, queryByText } = render(<Books />)
    
    await waitFor(() => {
      expect(getByText('Fake Book 1 by Fake Artist 1')).toBeInTheDocument()
    })
    
    fireEvent.click(getByText('Fake Book 1 by Fake Artist 1'))
    
    expect(getByText('Fake Book 1')).toBeInTheDocument()

    expect(queryByText('Brave New World')).not.toBeInTheDocument()
  })

  it('should clear selected book when the button is clicked', async () => {
    axios.get.mockResolvedValueOnce({ data: books })
    
    const { getByText, queryByText } = render(<Books />)
    
    await waitFor(() => {
      expect(getByText('Fake Book 1 by Fake Artist 1')).toBeInTheDocument()
    })
    
    fireEvent.click(getByText('Fake Book 1 by Fake Artist 1'))
    
    fireEvent.click(getByText('Clear book selected'))
    
    expect(queryByText('Clear book selected')).not.toBeInTheDocument()
  })

  it('should handle error when fetching books', async () => {
    // pending to whomever wants to give it a try
  })
})