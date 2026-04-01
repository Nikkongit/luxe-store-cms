'use client'

import React, { useEffect, useState } from 'react'

export const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false)

    useEffect(() => {
        // Check local storage
        const theme = localStorage.getItem('theme')
        if (theme === 'light') {
            document.body.classList.add('light-mode')
            setIsLight(true)
        }
    }, [])

    const toggleTheme = () => {
        if (isLight) {
            document.body.classList.remove('light-mode')
            localStorage.setItem('theme', 'dark')
            setIsLight(false)
        } else {
            document.body.classList.add('light-mode')
            localStorage.setItem('theme', 'light')
            setIsLight(true)
        }
    }

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {isLight ? '🌙' : '☀️'}
        </button>
    )
}
