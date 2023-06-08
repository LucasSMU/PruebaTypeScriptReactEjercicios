interface Props {
    // children: any -> cualquier cosa JSX, arrow function, etc..
    subs: Array<{
        nick: string,
        avatar: string,
        subMonth: number,
        description?: string
    }>
}

// Hay otra forma de typar los componentes funcionales, esto nos da acceso a children...pero no siempre es bueno
// Hay que segir la logica
// const List2: React.FunctionComponent<Props> =  ({ subs }:Props) => {return(<></>)}
const List = ({ subs }:Props) => {
    const renderList = (): JSX.Element[] =>{ // Es un jsxelemnt array porque devuelve un array por el map
        return (
                subs.map((sub) => {
                        return (
                            <>
                                <li key={sub.nick}>
                                    <img src={sub.avatar} alt={`Avatar de ${sub.avatar}`} />
                                    <h4>{sub.nick}</h4>
                                    <p>{sub.description?.substring(0, 100)}</p>
                                </li>
                            </>
    
                        );
                    })
            )
    }
    
    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List