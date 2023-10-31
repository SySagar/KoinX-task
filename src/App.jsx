import { Stack } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Application from './components/Application'

function App() {

  return (
    <Stack minHeight={'100vh'} sx={{
      backgroundColor: '#EFF2F5'
    }}>
    <Header />
    <Application />
    </Stack>
  )
}

export default App
