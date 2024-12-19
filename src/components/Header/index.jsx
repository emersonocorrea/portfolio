import { Label, Title1, Parag } from "../Typography"
import { DefaultBtn } from "../DefaultBtn"

export const Header = () => {
    return(
        <header className="w-full flex flex-col items-center gap-y-16 md:flex-row md:justify-between">
            
                <div className="flex flex-col gap-6 md:w-[50%]">
                    <Label
                        text="Emerson Alexandre"
                    />
                    <Title1
                        text="Bem vindo ao meu portfólio"
                    />
                    <Parag
                        text="Especialista em transformar designs em realidade."
                    />
                    <DefaultBtn
                        text="Saiba mais"
                    />
                </div>
                <div>
                    <img src="avatar.png" alt="avatar" />
                </div>
            
        </header>
    )
}