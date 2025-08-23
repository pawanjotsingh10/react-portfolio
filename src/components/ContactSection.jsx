import { Toast } from "@radix-ui/react-toast"
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { useState } from "react"
import { useToast } from "../hooks/use-toast"

export const ContactSection = () => {

    const[isSubmitting,setIsSubmitting]=useState(false)

    const {toast}=useToast()

    const handleSubmit=(e)=>{
        e.preventDefault()

        setIsSubmitting(true)

        setTimeout(()=>{
            toast({title:"Message sent!", description:"Thank you for your message. I'll get back to you soon."})
            setIsSubmitting(false)
        },1500)
        
    }

    return <section id="contact"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center items-center">
                        <div className="flex flex-col items-center space-x-0">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="">
                                <h4 className="font-medium">Email</h4>
                                <a  
                                href="https://mail.google.com/mail/?view=cm&to=pawanjotsingh10@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                // To tackle tabnabbing
                                className="text-muted-foreground hover:text-primary transition-colors">
                                pawanjotsingh10@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-x-0">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="">
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+61402532022" className="text-muted-foreground hover:text-primary transition-colors">
                                +61 402-532-022
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-x-0">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="">
                                <h4 className="font-medium">Location</h4>
                                <a
                                href="https://www.google.com/maps?q=Perth,WA,Australia"
                                target="_blank"
                                rel="noopener noreferrer"
                                // To tackle tabnabbing
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Perth, WA, Australia
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4>Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            {/* <a href="#" target="_blank">
                                <Instagram/>
                            </a> */}
                            <a href="https://www.linkedin.com/in/pawanjotsingh10" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://github.com/pawanjotsingh10" target="_blank">
                                <Github/>
                            </a>
                            
                        </div>
                    </div>
                </div>
                {/* <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">
                        Send a Message
                    </h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-mb border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Pawajot Singh"></input>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-mb border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="demo@gmail.com"></input>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-mb border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Your message goes here..."></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="cosmic-button w-full flex items-center justify-center gap-2">
                            Send Message
                            <Send size={16}/>
                        </button>

                    </form>
                </div> */}
            </div>
        </div>
    </section>
}