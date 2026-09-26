import { useState } from 'react'

function App() {
  const [type, setType] = useState('all')
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, length }),
      })
      const data = await response.json()

      if (response.ok) {
        setError('')
        setPassword(data.password)
      } else {
        setPassword('')
        setError(data.error)
      }
    } catch {
      setPassword('')
      setError('Could not reach the server. Is the Python backend running?')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Password Generator</h1>

      <label>
        Type:{' '}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="lower">Lowercase</option>
          <option value="upper">Uppercase</option>
          <option value="symbols">Symbols</option>
          <option value="all">All</option>
        </select>
      </label>

      <br /><br />

      <label>
        Length (6-12):{' '}
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <br /><br />

      <button onClick={handleGenerate}>Generate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {password && <p>This is your password: <strong>{password}</strong></p>}
    </div>
  )
}

export default App