import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    // { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Past Experiences", href: "/PastExp" },
    { name: "Contact", href: "/#contact" },

]


export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
        // To take care of memory leaks/stacking of event listeners

    }, [])

    return <nav className={`fixed w-full z-40 transition-all duration-300 
                ${isScrolled ? "py-6 bg-background/90  backdrop-blue-md shadow-md" : "py-9"}`}>
        {/* when scrolled nav bar will get thin and opacity will be little less */}
        <div className="ml-15 mr-20 flex items-center justify-between">
            {/* <a className="text-xl-bold text-primary flex items-center" href="/#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Parry</span>{" "}
                    in Perth
                </span>
            </a> */}

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
                {/* Hide the nav items in screens smaller than md*/}
                {navItems.map((item, key) => (
                    <a key={item.key} href={item.href} 
                    // className="text-foreground/80 px-2 py-1 rounded hover:underline hover:decoration-2 hover:decoration-primary transition-colors duration-300">
                    className="text-foreground/80 px-2 py-1 rounded hover:bg-primary hover:text-white transition-all duration-300">
                    {/* className="relative px-3 py-3 rounded-full text-foreground/80 hover:bg-primary hover:text-white transition-all duration-300"> */}
                        {item.name}
                    </a>
                ))}
            </div>

            {/* mobile nav */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden fixed top-6 left-8 md:top-3 text-foreground z-50"
                // button is visible only on small screens
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className={`fixed inset-0 bg-background/1 backdrop-blur-md z-40 flex flex-col items-center justify-center 
                                        transition all duration-300 md:hidden 
                                        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                {/* inset-0 is shortcut for top-0 right-0 bottom-0 left-0  -- so the div covers entire screen*/}
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={item.key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    </nav>
}