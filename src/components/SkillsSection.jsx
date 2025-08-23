import { useEffect, useState } from "react"

const skills=[
    {name:"React", level:95, category:"frontend"},

    {name:"Angular", level:70, category:"frontend"},
    {name:"HTML", level:60, category:"frontend"},
    {name:"CSS", level:60, category:"frontend"},

    {name:"Git/GitHub", level:60, category:"tools"}

    // {name:"Node.Js", level:10, category:"backend"},
]

// const categories=["all","frontend","backend", "tools"]
const categories=["all","frontend", "tools"]

export const SkillsSection=({ skill })=>{


    const [activeCategory,setActiveCategory]=useState("all")
    const [visibleLevels, setVisibleLevels] = useState({});

    const filteredSkills=skills.filter((skill)=>activeCategory==="all" || skill.category===activeCategory)

    // animate skill bars on load/category change
  useEffect(() => {
    const timeout = setTimeout(() => {
      const updatedLevels = {};
      filteredSkills.forEach((skill) => {
        updatedLevels[skill.name] = skill.level;
      });
      setVisibleLevels(updatedLevels);
    }, 500); // delay for animation trigger

    return () => clearTimeout(timeout);
  }, [activeCategory]);


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize 
                        ${activeCategory===category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"}`}>
                            {category}
                        </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 bg-white h-2 rounded-full overflow-hidden">
                        
                        <div className="bg-primary h-2 rounded-full origin-left transition-[width] duration-1000 ease-in-out delay-200"
                                style={{ width: `${visibleLevels[skill.name] || 0}%` }}/>

                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
}