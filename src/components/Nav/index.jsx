import { Anchor } from "../Typography"
import { DefaultBtn } from "../DefaultBtn"

export const Nav = () => {
    return(
        <div className="flex flex-col items-center w-full gap-6 md:flex-row">
            <div>
                <img src="portfolio.png" alt="logo" className="md:w-28"/>
            </div>
            <div className="flex flex-row justify-evenly w-full">
                <Anchor 
                    url="#"
                    text="Sobre"
                />
                <Anchor 
                    url="#"
                    text="Stack"
                />
                <Anchor 
                    url="#"
                    text="projetos"
                />
            </div>
            <DefaultBtn 
                text="Contato"
            />
        </div>
    )
}