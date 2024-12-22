"client side"

import { Nav } from "@/components/Nav"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { StackList } from "@/components/StackList"
import { ProjectList } from "@/components/ProjectList"
import { Footer } from "@/components/Footer"

const Page = () => {
  return(
    <div className="container h-full text-white mx-auto px-6 py-10 flex  items-center flex-col gap-y-24">
        <Nav />
        <Header />
        <AboutMe />
        <StackList />
        <ProjectList />
        <Footer />
    </div>
  )
}

export default Page