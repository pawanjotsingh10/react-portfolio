import { ArrowDown } from "lucide-react"

export const HeroSection = () => {

    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">Pawanjot</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2">Singh</span>
                </h1>
                <p className="text-sm md:text-sm text-gray-500 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Frontend Developer <br/>~ 
                    <br/>Building clean, responsive, and user-friendly web applications
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                        View my work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            {/* tranform translate is used because I positioned the div absolute to make it truly centered */}
            <span className="text-sm text-gray-500 mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}