import { useEffect, useState } from "react"

export const StarBackground=()=>{

    const [stars,setStars]= useState([])
    const [meteors,setMeteors]= useState([])

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize=()=>{
            generateStars();
        }

         const meteorInterval = setInterval(() => {
            generateMeteors()
          }, 5000)
          //To create new meteors every 5second

        window.addEventListener("resize",handleResize)
        //Generating new stars everytime window resized, so that stars are created accordingly and don't overcrowd the screen

        return ()=>{window.removeEventListener("resize",handleResize)
        clearInterval(meteorInterval);
        }
        //clearing the event listener and meteor generation to avoid memory leaks and multiple handlers stacking causing performance issues

       
      
    },[])
    //dependeny array - run this useEffect only one when the component is mounted (first render)

    const generateStars=()=>{
        const numberOfStars=Math.floor((window.innerHeight*window.innerWidth)/10000)
        //calculating the area of the screen and dividing it to get a number for stars
    

    const newStars=[]

    for(let i=0; i<numberOfStars; i++){
        newStars.push({
            id:i,
            size:Math.random()*3+1,
            x:Math.random()*100,
            y:Math.random()*100,
            opacity:Math.random()*0.5+0.5,
            animationDuration:Math.random()*4+2,
        })
    }

    setStars(newStars)
}

// const generateMeteors=()=>{
//     const numberOfMeteors=2


// const newMeteors=[]

// for(let i=0; i<numberOfMeteors; i++){
//     newMeteors.push({
//         id:Date.now() + Math.random(),
//         size:Math.random()*2+1,
//         x:Math.random()*50,
//         y:Math.random()*20,
//         delay:Math.random()*15,
//         animationDuration:Math.random()*3+3,
//     })
// }

// setMeteors(newMeteors)

const generateMeteors = () => {
    const numberOfMeteors = 1
    const newMeteors = []

    for (let i = 0; i < numberOfMeteors; i++) {
      const id = Date.now() + Math.random()

      const meteor = {
        id,
        size: Math.random() * 1.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 2,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 3 + 3,
      }

      newMeteors.push(meteor)

      // Remove meteors after animation ends to avoid memory leaks
      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== id))
      }, meteor.animationDuration * 2000)
    }

    setMeteors((prev) => [...prev, ...newMeteors])
  }


    return ( 
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star)=>(
            <div key={star.id} className="star animate-pulse" 
            style={{
                width:star.size+"px",
                height:star.size+"px",
                left:star.x+"%",
                top:star.y+"%",
                opacity:star.opacity,
                animationDuration:star.animationDuration+"s"
            }}/>
        ))}

{meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" 
            style={{
                width:meteor.size*25+"px",
                height:meteor.size*1+"px",
                left:meteor.x+"%",
                top:meteor.y+"%",
                animationDelay:meteor.delay,
                animationDuration:meteor.animationDuration+"s"
            }}/>
        ))}
    </div>
    )
}