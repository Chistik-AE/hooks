import Column from "../Column/Column"

function Main() {
    return (
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column tilte={"Без статуса"} />
              <Column tilte={"Нужно сделать"} />
              <Column tilte={"В работе"} />
              <Column tilte={"Тестирование"} />
              <Column tilte={"Готово"} />
            </div>
          </div>
        </div>
      </main>
    )
}

export default Main