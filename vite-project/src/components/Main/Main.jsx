import Column from "../Column/Column"
import { cardList } from "../../data"


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готво",
];

function Main({ cardList, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {
              isLoading ? 'Идёт загрузка' :
                statusList.map((status) => (
                  <Column key={status} tilte={status}
                    cardList={cardList.filter((card) => card.status === status)} />
                ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main