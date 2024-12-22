import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Title2, Anchor, Parag } from "../Typography"


export const Footer = () => {
    return(
        <div className="w-full flex flex-col items-center gap-y-6 text-center border-y-2 py-6 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4">
                <Title2 
                    text="Contato"
                />
                <div className="flex gap-6 md:self-start">
                    <Anchor url="#" text="" icon={<FaWhatsapp />}/>
                    <Anchor url="#" text="" icon={<FaLinkedin />}/>
                    <Anchor url="#" text="" icon={<FaGithub />}/>
                </div>
            </div>
            <Parag text="Todos os direitos reservados - Emerson Alexandre"/>
        </div>
    )
}