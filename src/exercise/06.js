// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUsername] = React.useState('')
  // const inputRef = React.useRef(null)
  // const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername()
  }

  const handleInputChange = event => {
    const value = event.target.value
    setUsername(value.toLowerCase())
    // setError(value !== value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userInput">Username:</label>
        <input
          // ref={inputRef}
          id="userInput"
          type="text"
          value={userName}
          onChange={handleInputChange}
        />
      </div>
      {/* {error && (
        <div role="alert" style={{color: 'red'}}>
          User must enter lower case
        </div>
      )} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
