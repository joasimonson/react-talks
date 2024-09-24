import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('Request:', config)
  return config
})

axios.interceptors.response.use(
  response => {
    console.log('Response:', response)
    return response
  },
  error => {
    console.error('Error response:', error)
    return Promise.reject(error)
  }
)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-body">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
