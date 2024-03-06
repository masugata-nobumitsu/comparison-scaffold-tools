---
name: "Component"
root: "components"
output: "."
ignore: []
questions:
  path: "パスを入力してください(例: /sample/path)"
  name: "コンポーネント名を入力してください(例: SampleComponent)"
---

# `../components/scaffdogSample{{ inputs.path }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```ts
import React, { useState } from 'react'

type Props = {
  name: string
}

export const {{ inputs.name | pascal }}: React.FC<Props> = ({
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
```

# `../components/scaffdogSample{{ inputs.path }}/{{ inputs.name | pascal }}/index.ts`

```ts
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'
```
