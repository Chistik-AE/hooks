import Card from "../Card/Card"

function Column({ tilte, cardList }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{tilte}</p>
            </div>
            <div className="cards">
                {cardList.map((card) => (
                    < Card key={card.id} title={card.title} theme={card.theme} date={card.date} />
                ))}
            </div>
        </div>
    )
}

export default Column