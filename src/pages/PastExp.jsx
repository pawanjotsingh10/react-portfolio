import { useMemo } from "react"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const PastExp = () => {

    const images = [
        "/pngs/001.png",
        "/pngs/002.png",
        "/pngs/003.png",
        "/pngs/004.png",
        "/pngs/005.png",
        "/pngs/006.png",
        "/pngs/007.png",
        "/pngs/008.png",
        "/pngs/009.png",
        "/pngs/010.png",
        "/gifs/011.gif",
        "/gifs/012.gif",
        "/gifs/013.gif",
        "/gifs/014.gif"
      ];

      const randomImage = useMemo(() => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
      }, []);
    

    return (<div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">

        {
            //Theme toggle
            // <ThemeToggle/>
        }

        {
            //Background effects
            // <StarBackground/>
        }

        {
            //navbar
            <NavBar />
        }

        {
            <main className="flex-1 relative pt-16 z-10">
                <div className="max-w-6xl mx-10 my-5 md:my-0 flex flex-col md:flex-row items-center justify-between text-center md:text-left z-10">
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
                            <span className="text-primary opacity-0 animate-fade-in">Pawanjot</span>
                            <br />
                            <span className="text-gradient opacity-0 animate-fade-in-delay-2">Singh</span>
                        </h1>
                        <p className="text-sm md:text-sm text-gray-500 max-w-2xl mx-2 opacity-0 animate-fade-in-delay-3">
                            Frontend Developer | React
                        </p>
                        <a 
                            href="/resume/Pawanjot SINGH_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            // To tackle tabnabbing
                            download="Pawanjot SINGH_Resume.pdf" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>

                    <div className="hidden md:block w-1/3 max-w-md aspect-[3/4] opacity-95 mix-blend-multiply">
                        <img
                            // src="/me/me_2.png"
                            // src="/gifs/014.gif"
                            src={randomImage}
                            alt="random images"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>


                <section className="mt-32 max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Past Experiences</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between h-full card-hover">
                            <div className="space-y-1 text-left">
                                <h3 className="text-xl text-primary font-semibold">Software Developer</h3>
                                <h3 className="text-sm text-gray-500-foreground italic font-normal">DoTimely</h3>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                October 2022 - October 2023
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between h-full card-hover">
                            <div className="space-y-1 text-left">
                                <h3 className="text-xl text-primary font-semibold">Software Developer</h3>
                                <h3 className="text-sm text-gray-500-foreground italic font-normal">Foray Software</h3>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                October 2021 - August 2022
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between h-full card-hover">
                            <div className="space-y-1 text-left">
                                <h3 className="text-xl text-primary font-semibold">Frontend Developer & QA Analyst</h3>
                                <h3 className="text-sm text-gray-500-foreground italic font-normal">Yuwee</h3>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                March 2018 - October 2021
                            </p>
                        </div>
                    </div>
                </section>

            </main>

        }


        {
            //footer
            <Footer />
        }
    </div>
    )
}