import { useState } from 'react'
import './App.css'
import ImageDropzone from './components/ImageDropzone'
import ResultCards from './components/ResultCards'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleImageUpload = async (file) => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const apiUrl = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${apiUrl}/api/analyze`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResults(null)
    setError(null)
  }

  return (
    <div className="app">
      <ThemeToggle />
      <div className="container">
        <h1 className="title">AI Screenshot Explainer</h1>
        <p className="subtitle">Upload a screenshot to get AI-powered insights</p>
        
        {!results && (
          <ImageDropzone 
            onImageUpload={handleImageUpload} 
            loading={loading}
          />
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={handleReset} className="reset-button">
              Try Again
            </button>
          </div>
        )}

        {results && (
          <>
            <ResultCards results={results} />
            <button onClick={handleReset} className="reset-button">
              Analyze Another Image
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App

