import Card from "../Card/Card"

function Column({tilte}) {
    return (
<div className="main__column column">
                <div className="column__title">
                  <p>{tilte}</p>
                </div>
                <div className="cards">
                  <Card name={"Первая карточка"} theme={"Design"} date={"30.04.2025"} />
                  <Card name={"Вторая карточка"} theme={"layout"} date={"31.12.2024"}/>
                  <Card name={"Третья карточка"} theme={"testing"} date={"15.06.2024"}/>
                  <Card name={"Четвёртая карточка"} theme={"development"} date={"18.09.2025"}/>
                </div>
              </div>
    )
}

export default Column