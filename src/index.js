import ReactDOM from "react-dom"
import "./index.css"
import { useState, useEffect } from "react"
import { getGifs } from "./services/gifs"
import Gif from "./components/gif"

const rootElement = document.getElementById("root")

const App = () => {
  const [gifs, setGifs] = useState([])
  const [gifName, setName] = useState("gatitos")
  const [newGif, setNewGif] = useState("")
  useEffect(() => {
    getGifs({ keyword: gifName }).then((gifs) => {
      setGifs(gifs)
    })
  }, [gifName])
  const ShowGifs = () => (
    <div className="containerGifs">
      {gifs.map((gif) => Gif({ id: gif.id, title: gif.title, url: gif.url }))}
    </div>
  )

  const handleChange = (event) => {
    setNewGif(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setName(newGif)
  }
  return (
    <>
      <section>
        <div className="searchSection">
          <h1>Giphy Searcher</h1>
          <h4>Ingrese su busqueda</h4>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange}></input>
            <button>Busqueda</button>
          </form>
        </div>
      </section>
      <br></br>
      <ShowGifs></ShowGifs>
      <div className="giphy">powered by Giphy</div>
    </>
  )
  // const [notas, setnotas] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [addnotas, setNewnotas] = useState("")
  // useEffect(() => {
  //   setLoading(true)
  //   getAllNotes()
  //     .then((notas) => {  // Parte de React
  //       setnotas(notas)
  //       setLoading(false)
  //     })
  // },[])
  // const handleChange = (event) => {
  //   setNewnotas(event.target.value)
  // }

  // const deleteNota = () => {
  //   setNewnotas(notas.splice(-1))
  // }
  // const reset = () => {
  //   setnotas(INITIAL_STATE)
  // }
  // const Component = ({ aviso = "No hay notas" }) => (
  //   <>
  //     <h4>{aviso}</h4>
  //   </>
  // )
  // return (
  //   <div>
  //     {loading ? "Loading" : ""}
  //     <form onSubmit={handleSubmit}>
  //       <input onChange={handleChange} placeholder="Ingresar notas"></input>
  //       <button>Submit</button>
  //       {notas.map((e) => (
  //         <h3 key={e.id}>{e.title}</h3>
  //       ))}
  //     </form>
  //     {notas.length === 0 ? (
  //       <Component aviso="No hay notas"></Component>
  //     ) : (
  //       <h4>Nota añadida</h4>
  //     )}
  //     <button onClick={reset}>Reset notass</button>
  //     <button onClick={deleteNota}>Delete Last Note</button>
  //   </div>
  // )
}
const refresh = () => {
  ReactDOM.render(<App />, rootElement)
}

refresh()
