import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export const ThemeToggle=()=>{

    const [isDarkMode,setIsDarkMode]=useState(false)

    const toggleTheme=()=>{
        if(isDarkMode){
            // If dark mode is active, remove the "dark" class from <html>
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false)
        }
        else{
            // If light mode is active, add the "dark" class to <html>
            document.documentElement.classList.add("dark")
            setIsDarkMode(true)
        }
    }

    return <button onClick={toggleTheme}>{isDarkMode? <Sun className="h-6 w-6 text-yellow-300"/>:<Moon className="h-6 w-6 text-blue-900"/>} </button>
}