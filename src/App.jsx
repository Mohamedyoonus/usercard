import React from 'react'
import UserCard from './UserCard'

const App = () => {
  return (
    <div>
      <UserCard name="mohamed" email="mohamed@gmail.com" />
      <UserCard name="yoonus" email="yoonus@gmail.com" />
      <UserCard name="ahamed" email="ahamed@.com" />
    </div>
  )
}

export default App