import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return <footer className="py-2 px-4 relative  border-border mt-12 pt-4 flex items-center">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Pawanjot Singh. All rights reserved.</p>
    <a 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="ml-auto p-2 rounded-full bg-primary text-white hover:bg-primary/20 text-primary transition-colors"
    >
      <ArrowUp size={20} />
    </a>
  </footer>

}