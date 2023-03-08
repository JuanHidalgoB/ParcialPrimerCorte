import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [Loterias,setLoterias] = useState([{
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
},
{
id: 4,
name: "De Bogotá"
},
{
  id: 5,
  name: "De Medellín"
  }])

const [compras,setCompras] = useState([])

const [compra,setCompra] = useState( 
  {num: 0,
  price:0,
  nloteria:"Del Valle"})

const setNewCompra = () =>{
  addNewCompras()
}

const addNewCompras = () => {
  setCompras(x => [...x,compra])
  }

const[numero, setNumero] = useState('')
    const onInputChangeN = (evt) => {
        setNumero(evt.target.value)

        setCompra({
          num: parseInt(evt.target.value),
          price: precio,
          nloteria: nomLoteria
       }
      )
    }

const[precio, setPrecio] = useState('')
    const onInputChange = (evt) => {
        setPrecio(evt.target.value)
        setCompra({
          num: numero,
          price: parseInt(evt.target.value),
          nloteria: nomLoteria
        } 
      )
    }

const[nomLoteria, setNomLoteria] = useState('Del Valle')
    const onInputChangeL = (evt) => {
        setNomLoteria(evt.target.value)
        setCompra({
          num: numero,
          price: precio,
          nloteria: (evt.target.value)})
    }
const [total,setTotal] = useState(0)


const mostrarTotal = () =>{
    compras.map(x=>{
      const t = 0
      setTotal(t => t + parseInt(x.price)
        )
      }
    )
  }

return(

  <>
  <h1>CHANCE</h1>
  
  <div>
  <label htmlFor="select">Lotería</label>
  <select id="select" name="select" value={nomLoteria} onChange = {(event) => onInputChangeL(event)}>
    {Loterias.map(
      (lot,key) => {
        return(
          <option value={lot.name}>{lot.name}</option>
         )
        }
       )
     }
</select>
    <label htmlFor="num">Número</label>
    <input id="num" type="text" minLength={3} maxLength={4} placeholder='numero' value={numero} onChange = {(event)=>onInputChangeN(event)} />
    <label htmlFor="precio">Precio</label>
    <input id="precio" type="text" maxLength={4} minLength ={3} placeholder='precio' value={precio} onChange = {(event)=>onInputChange(event)} />
    <button onClick={()=>setNewCompra()}>Añadir</button>
    <button onClick={()=>mostrarTotal()}>Mostrar Total</button>


    <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número</th>
            <th>Precio</th>
          </tr>
        </thead>

  {compras.map(x => {
    return(
        <tbody>
          <tr>
            <td >{x.nloteria}</td>
            <td>{x.num}</td>
            <td>{x.price}</td>
          </tr>
        </tbody>
          )
        }
      )
    }
    </table>
          
      <br />
      <br />

        <h3 >Total:  {total}</h3>
    </div> 
  </>
  ) 
}

export default App
