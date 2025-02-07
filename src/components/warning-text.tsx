import React from 'react'

const WarningText = (props: any) => {
    const { text } = props
    return (
        <div className="text-[#ffc725] text-sm font-semibold font-['Inter'] leading-tight">{text}</div>
    )
}

export default WarningText