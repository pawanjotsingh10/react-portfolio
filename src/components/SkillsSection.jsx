const skills=[
    {name:"React", level:95, category:"Frontend"},

    {name:"Node.js", level:10, category:"Backend"},

    {name:"Git/GitHub", level:60, category:"tools"}
]

export const SkillsSection=()=>{
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto mx-w-5xl">
            <h2 className="con">
                My <span>Skills</span>
            </h2>
        </div>
    </section>
}