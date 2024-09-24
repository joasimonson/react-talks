import { render } from '@testing-library/react'
import BookDetails from '.'

describe('BookDetails component', () => {
  describe('when book prop is provided', () => {
    let component

    beforeEach(() => {
      const fakeBook = {
        name: 'React Basics',
        author: 'John Doe',
        publishDate: '2021',
      }
  
      component = render(<BookDetails book={fakeBook} />)
    })

    it('renders book name correctly', () => {
      expect(component.getByText('React Basics')).toBeInTheDocument()
    })

    it('renders author correctly', () => {
      expect(component.getByText('Author: John Doe')).toBeInTheDocument()
    })

    it('renders publish date correctly', () => {
      expect(component.getByText('Publish Date: 2021')).toBeInTheDocument()
    })
  })

  describe('when book prop is not provided', () => {
    it('does not render book details', () => {
      const { container } = render(<BookDetails book={null} />)
      expect(container).toBeEmptyDOMElement()
    })
  })
})