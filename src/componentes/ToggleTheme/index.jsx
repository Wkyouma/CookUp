import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"
const ToggleTheme = () => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList
    useEffect(() => {
        systemPreference && document.documentElement.classList.add('dark')
    }) 
    const Toggle = () => {
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className="hidden sm:block">
            <SunIcon className="h-8  text-gray-100 hidden dark:block" onClick={Toggle}/>
            <MoonIcon className="h-8 text-gray-100 block dark:hidden" onClick={Toggle} />
        </div>
    )
}
export default ToggleTheme