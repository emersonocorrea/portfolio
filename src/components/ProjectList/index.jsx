import { projects } from "@/data/projetcs"
import { Title2, Title3, Anchor, Parag } from "../Typography"

export const ProjectList = () => {
    return(
        <div className="w-full flex flex-col items-start gap-6">
            <Title2 text="Projetos" />
            <ul>
                {projects.map(project => 
                    <li key={project.id} className="w-[327px]">
                        <div className="flex items-center justify-between">
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