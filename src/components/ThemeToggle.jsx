import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ThemeToggle=()=>{

    const [isDarkMode,setIsDarkMode]=useState(false)

    useEffect(()=>{
        const storedTheme= localStorage.getItem("theme")
        // using localStorage to save the status of darkmode

        if (storedTheme==="dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
        else {
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }
    },[])

    const toggleTheme=()=>{
        if(isDarkMode){
            // If dark mode is active, remove the "dark" class from <html>
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }
        else{
            // If light mode is active, add the "dark" class to <html>
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }

    return (
    <button onClick={toggleTheme} className="fixed top-3 md:top-1 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">{isDarkMode? <Sun className="h-6 w-6 text-yellow-300"/>:<Moon className="h-6 w-6 text-blue-900"/>} </button>)
}