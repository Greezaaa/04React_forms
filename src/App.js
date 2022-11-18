import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Form from './components/Form/Form'
import TextBox from './components/TextBox/TextBox';
import Header from "./components/Header/Header";
import { useState } from "react"

function App() {
  let appArray = [
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni']
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
  ]
  let [authors, setAuthors] = useState(appArray)
  let [textAreaValue, setTextAreaValue] = useState("")

  const addToArray = () => {
    let obj = { nombre: textAreaValue }
    let newAppArray = [obj, ...authors]
    setAuthors(newAppArray)
    setTextAreaValue('');
  }

  const deleteFromArray = () => {
    setAuthors(authors.filter((author) => author.nombre !== textAreaValue))
    setTextAreaValue('');
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TextBox content={authors} />
        <Routes>
          <Route path="/add" element={<Form set={setTextAreaValue} valor={textAreaValue} addValue={addToArray} deleteValue={deleteFromArray} btnDel={false} />} />
          <Route path="/delete" element={<Form set={setTextAreaValue} valor={textAreaValue} addValue={addToArray} deleteValue={deleteFromArray} btnDel={true} />} />
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App;
