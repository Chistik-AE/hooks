import './App.css'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/Main/Main'
import { useEffect, useState } from 'react'
import { cardList } from './data'

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  function addCard() {
    setCards(([
      ...cards,
      {
        id: cards.length + 1,
        theme: "Research",
        title: "Новая задача",
        date: "31.12.2024",
        status: "Без статуса",
      }
    ]))
  }

  return (
    <Wrapper>
      <Header addCard={addCard} />
      <Main isLoading={isLoading} cardList={cards} />
    </Wrapper>
  )
}

export default App
