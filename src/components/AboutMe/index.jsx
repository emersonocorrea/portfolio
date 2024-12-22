import { Title2, Parag } from "../Typography"

export const AboutMe = () => {
    return(
        <div className="w-full flex flex-col items-start md:flex-row md:justify-between gap-y-4" id="sobre">
            <div className="flex-1">
                <Title2
                    text="Sobre mim"
                />
            </div>
            <div className="flex-1">
                <Parag
                    text="Desenvolvedor front-end com 2 anos de experiência, apaixonado por criar interfaces intuitivas e experiências de usuário excepcionais. Possuo um sólido conhecimento em HTML, CSS, Javascript, React e Tailwind-css e sou especialista em design responsivo, UX. Busco constantemente me aprimorar e contribuir para projetos que combinem tecnologia e design inovador."
                />
            </div>
        </div>
    )
}