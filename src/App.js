import { useState } from "react"
import { questions } from "./data"

console.log(questions)

const Flashcards = () => {
  const [selectedId, setSelectedId] = useState(null)
  console.log(questions[0])

  const selectHandler = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => selectHandler(question.id)}
        >
          <p>
            {question.id === selectedId
              ? question.answer
              : question.question}
          </p>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <>
      <Flashcards />
    </>
  )
}

export default App
