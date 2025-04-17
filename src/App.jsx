import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import router from './router'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
