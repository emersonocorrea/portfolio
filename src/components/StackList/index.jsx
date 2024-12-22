import { Title2 } from "../Typography"
import { stacks } from "@/data/stacks"


export const StackList = () => {
    return(
        <div className="w-full flex flex-col items-start gap-6" id="stack">
            <Title2 text="Tecnologias"/>
            <ul className="flex md:flex-wrap  flex-col w-full gap-6 md:flex-row ">
                {stacks.map(stack => 
                    <li key={stack.id} className="flex items-center border-[1px] px-4 py-6 rounded-3xl  gap-4 text-2xl font-bold min-w-[300px]">
                        {stack.icon} 
                        {stack.name}
                    </li>
                )}
            </ul>
        </div>
    )
}