import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Library</h1>
        <p className="mb-6">Access a world of knowledge at your fingertips.</p>
        <button
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
          onClick={() => navigate('/userLogin')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default App
