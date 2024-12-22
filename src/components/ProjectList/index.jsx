import { projects } from "@/data/projetcs"
import { Title2, Title3, Anchor, Parag } from "../Typography"

export const ProjectList = () => {
    return(
        <div className="w-full flex flex-col items-start gap-6" id="projetos">
            <Title2 text="Projetos" />
            <ul className="flex md:flex-wrap  flex-col w-full gap-6 md:flex-row ">
                {projects.map(project => 
                    <li key={project.id} className="flex flex-col items-start border-[1px] px-4 py-6 rounded-3xl  gap-4 text-2xl font-bold min-w-[300px] ">
                        <div className="flex items-center justify-between w-full">
                            <Title3 text={project.name}/>
                            <div>{project.icon}</div>                            
                        </div>
                        <Parag text="Descrição do projeto"/>
                        <Anchor url="#" text="Saiba mais" />
                    </li>
                )}
            </ul>
        </div>
    )
}