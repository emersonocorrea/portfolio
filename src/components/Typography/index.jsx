export const Title1 = ({text}) => {
    return(
        <h1 className="font-bold text-[42px] md:text-[48px]">{text}</h1>
    )
}

export const Title2 = ({text}) => {
    return(
        <h2 className="font-bold text-[36px] md:text-[40px]">{text}</h2>
    )
}

export const Title3 = ({text}) => {
    return(
        <h3 className="font-bold text-[22px]">{text}</h3>
    )
}

export const Label = ({text}) => {
    return(
        <label className="font-normal text-[14px] text-colorLink">{text}</label>
    )
}

export const Anchor = ({text, url, icon}) => {
    return(
        <a href={url} className="hover:text-colorLink font-bold text-[16px]">{text} {icon}</a>
    )
}

export const Parag = ({text}) => {
    return(
        <p className="font-normal text-[16px]">{text}</p>
    )
}