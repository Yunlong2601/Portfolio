import React from 'react'
import { Progress } from '../ui/progress'

type Props = {
  name?: string
  value: number
}

const ProgressSkill = ({ name, value }: Props) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-center">
        {name && <p className="text-sm font-semibold">{name}</p>}
        <span className="text-xs font-bold text-primary ml-2 shrink-0">{value}%</span>
      </div>
      <Progress value={value} className="w-full h-2" />
    </div>
  )
}

export default ProgressSkill
