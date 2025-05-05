import React from 'react'

function IconLabel({ icon, label,onClick }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {icon}
            <span onClick={onClick} style={{ marginLeft: "8px" }}>
                {label}
            </span>
        </li>
    )
}

export default IconLabel
