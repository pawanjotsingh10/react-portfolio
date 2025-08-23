import { Briefcase, Code, User } from "lucide-react"

export const AboutSection=()=>{

    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* mobile 1 col- medium and above 2 cols */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-sm text-muted-foreground">
                    I craft responsive and user-friendly web applications using React, Angular, and modern technologies
                    </p>

                    <p className="text-sm text-muted-foreground">Always curious, always building!</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                            Get in touch
                        </a>

                        <a href="/resume/Pawanjot SINGH_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        // To tackle tabnabbing
                        // download="Pawanjot SINGH_Resume.pdf" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-sm text-muted-foreground">
                                Building responsive and scalable front-end applications with React, Angular, and modern frameworks
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Mindset</h4>
                                <p className="text-sm text-muted-foreground">
                                Creating clean, user-friendly interfaces and enhancing user experience in collaboration with designers
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Collaboration & Growth</h4>
                                <p className="text-sm text-muted-foreground">Team player with a strong drive for continuous learning and applying new technologies</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}