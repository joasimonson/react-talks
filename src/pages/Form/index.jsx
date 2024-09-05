import { useState, useEffect } from 'react'

const Form = () => {
  const [value, setValue] = useState('')
  const [requestResult, setRequestResult] = useState('Pending')

  useEffect(() => {
    const timer = setTimeout(() => {
      setRequestResult('Finished')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (requestResult === 'Finished') {
      const timer = setTimeout(() => {
        setValue('Ready!')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [requestResult])

  const handleSubmit = (event) => {
    //validation
    alert(value)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{requestResult}</h1>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form