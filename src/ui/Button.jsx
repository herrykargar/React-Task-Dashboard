import React from 'react'
import './Button.css';
export default function Button({ children }) {
    return (
        <div>
            <button className="custom-button">
                {children}
            </button>
        </div>
    )
}
