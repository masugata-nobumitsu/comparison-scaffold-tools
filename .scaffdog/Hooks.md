---
name: "Hooks"
root: "components"
output: "."
ignore: []
questions:
  name: "Hooks名を入力してください(例: clickButton)"
---

# `../components/scaffdogSample/Hooks/use{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.tsx`

```ts
import { useState } from 'react'

type Use{{ inputs.name | pascal }}PayloadType = {
  id: string
}

type Use{{ inputs.name | pascal }}ReturnType = {
  state: string
  handleClick: () => void
}

export const use{{ inputs.name | pascal }} = ({
  id,
}: Use{{ inputs.name | pascal }}PayloadType): Use{{ inputs.name | pascal }}ReturnType => {
  const [state, setState] = useState(id)
  const handleClick = () => {
    setState('click')
  }

  return {
    state,
    handleClick
  }
}

```

# `../components/scaffdogSample/Hooks/use{{ inputs.name | pascal }}/index.ts`

```ts
export { use{{ inputs.name | pascal }} } from './use{{ inputs.name | pascal }}'
```

# `../components/scaffdogSample/Hooks/index.ts`

```ts
{{ read output.abs }}
export { use{{ inputs.name | pascal }} } from './use{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.tsx'
```
