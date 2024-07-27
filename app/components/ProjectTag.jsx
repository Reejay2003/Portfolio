import React from 'react'

const ProjectTag = ({name, isSelected,onClick}) => {
    const classn = isSelected?'bg-secondary border-secondary':'bg-primary border-slate-400'
  return (
    <button onClick={() => onClick(name)} className={`mx-5 p-[5px] rounded-3xl w-36 ${classn}  border-[2px] text-lg hover:border-secondary`}>{name}</button>
  )
}

export default ProjectTag
