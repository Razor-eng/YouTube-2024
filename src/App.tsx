import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'
import { useState } from 'react';

export default function App() {
  const [view, setView] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setView={setView} view={view} />} />
        <Route path='/search' element={<Search setView={setView} view={view} />} />
        <Route path='/watch/:id' element={<Watch setView={setView} view={view} />} />
      </Routes>
    </BrowserRouter>
  )
}
