'use client'

import { useTheme } from 'next-themes'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

export default function ThemeToggler() {

    const { theme, setTheme } = useTheme();
    return <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

    >

        {
            theme ==='dark' ? <BsFillSunFill size={30}/> : <MdDarkMode size={30}/>
        }

        

    </button>
}