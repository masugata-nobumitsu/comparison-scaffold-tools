---
to: "components/hygenSample/Hooks/use<%= h.changeCase.pascal(name) %>/use<%= h.changeCase.pascal(name) %>.tsx"
---

import { useState } from 'react'

type Use<%= h.changeCase.pascal(name) %>PayloadType = {
  id: string
}

type Use<%= h.changeCase.pascal(name) %>ReturnType = {
  state: string
  handleClick: () => void
}

export const use<%= h.changeCase.pascal(name) %> = ({
  id,
}: Use<%= h.changeCase.pascal(name) %>PayloadType): Use<%= h.changeCase.pascal(name) %>ReturnType => {
  const [state, setState] = useState(id)
  const handleClick = () => {
    setState('click')
  }

  return {
    state,
    handleClick
  }
}
