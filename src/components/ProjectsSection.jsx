import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Smart-Serve",
        description: "A clean dashboard to showcase performance with grids and charts",
        image: "/projects/Smart-Serve/ss_03.png",
        tags: ["Typescript", "JavaScript","Angular","HTML","CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/pawanjotsingh10/Smart-Serve"
    },
    {
        id: 2,
        title: "My-Notes",
        description: "A simple To Do notes app with CRUD implementation",
        image: "/projects/My-Notes/notes_03.png",
        tags: ["JavaScript","React", "HTML","CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/pawanjotsingh10/My-Notes"
    }
    // {
    //     id: 3,
    //     title: "three",
    //     description: "desciption of project three",
    //     image: "/projects/project3.jpg",
    //     tags: ["Typescript", "TailwindCSS", "Supabase"],
    //     demoUrl: "#",
    //     githubUrl: "#"
    // }
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Following are the projects I created for practice (Apart from this Online Portfolio!)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-25">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {/* <a href={project.demoUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank">
                                        <ExternalLink size={20} />
                                    </a> */}
                                    <a href={project.githubUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/pawanjotsingh10"
                    target="_blank">
                    Check my GitHub <ArrowRight size={16} />
                </a>
            </div>

        </div>
    </section>
}