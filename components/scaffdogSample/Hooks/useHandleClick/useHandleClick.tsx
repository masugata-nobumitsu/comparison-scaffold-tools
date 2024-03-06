import { useState } from 'react'

type UseHandleClickPayloadType = {
  id: string
}

type UseHandleClickReturnType = {
  state: string
  handleClick: () => void
}

export const useHandleClick = ({
  id,
}: UseHandleClickPayloadType): UseHandleClickReturnType => {
  const [state, setState] = useState(id)
  const handleClick = () => {
    setState('click')
  }

  return {
    state,
    handleClick
  }
}
