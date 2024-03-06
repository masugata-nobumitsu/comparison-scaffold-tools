---
to: "components/hygenSample<%= path %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx"
---

import React, { useState } from 'react'

type Props = {
  name: string
}

export const <%= h.changeCase.pascal(name) %>: React.FC<Props> = ({
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