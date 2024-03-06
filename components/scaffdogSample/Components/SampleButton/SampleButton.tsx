import React, { useState } from 'react'

type Props = {
  name: string
}

export const SampleButton: React.FC<Props> = ({
  name
}) => {
  const [state, setState] = useState('')
  const handleClick = () => {
    setState('click')
  }

  return (
    <div>
      <p>{name}</p>
      <p>{state}</p>
      <button type='button' onClick={handleClick}>button</button>
    </div>
  )
}