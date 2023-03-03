import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const Loterias = [{
    id: 1,
    name: "Del Valle"
  },
{
  id: 2,
  name: "De Bucaramanga"
},
{
  id: 3,
  name:"Nacional"
}]

const[numero, setinputNumero] = useState('')
    const onInputChangeN = (evt) => {
        setinputNumero(evt.target.value)
    }



const[precio, setinputPrecio] = useState('')
    const onInputChange = (evt) => {
        setinputPrecio(evt.target.value)
    }

const mostarLoteria = () =>{
      console.log(numero, precio)
    }

const [compras,setCompra] = useState([
  {numero: 10,
precio:2000,
nLoteria:"Del Valle"}]
)
const onInputChangeC = () => {
  const compraNueva = {numero: numero,
  precio: precio,
  nLoteria:"Del Valle"}
  setCompra(x => [...{x},{compraNueva}])
  }



return(

  <>
  <h1>CHANCE</h1>
  
  <div>
  <label htmlFor="select">Lotería</label>
  <select id="select" name="select">
    {Loterias.map(
      (lot,key) => {
        return(
          <option value={lot.name}>{lot.name}</option>
        )
      }
    )}
</select>
    <label htmlFor="num">Número</label>
    <input id="num" type="number" placeholder='numero' value={numero} onChange = {(event)=>onInputChangeN(event)}/>
    <label htmlFor="precio">Precio</label>
    <input id="precio" type="number" placeholder='precio' value={precio} onChange = {(event)=>onInputChange(event)} />
    <button onClick={()=>on()}>Añadir</button>
    <button onClick={()=>mostarLoteria()}>mostrar</button>
    </div>

    <div>

      <br />
      <label htmlFor="">Lotería</label>
      <label htmlFor="">Número</label>
      <label htmlFor="">Precio</label>
      <br />
      {compras.map((x)=>{
      return(
        <>
        <label htmlFor="">{x.nLoteria}</label>
        <label htmlFor="">{x.numero}</label>
        <label htmlFor="">{x.precio}</label>
        <br />
        </>
      )})}
    </div>

  </>
)
  
}

export default App
