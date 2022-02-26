
export const SectionTitle = (props) => {
    return(
        <div className="section_header">
            <h1> {props.title}</h1>
            <h5>{props.subTitle}</h5>
        </div>
    )
}

export const CardWrap = (props) => {
    return(
        <div className={`cardWrap ${props.classes}`}>
             {props.children}            
        </div>
    )
}