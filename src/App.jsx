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
}])

const [compras,setCompras] = useState([{}])



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
          price: compra.price,
          nloteria: compra.nloteria
      })
    }

const[precio, setPrecio] = useState('')
    const onInputChange = (evt) => {
        setPrecio(evt.target.value)
        setCompra({
          num: compra.num,
          price: parseInt(evt.target.value),
          nloteria: compra.nloteria
      })
    }

const[nomLoteria, setNomLoteria] = useState('Del Valle')
    const onInputChangeL = (evt) => {
        setNomLoteria(evt.target.value)
        setCompra({num: numero,
          price: precio,
          nloteria: nomLoteria})
    }

const mostarLoteria = () =>{
      console.log(compra)
      console.log(compras)
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
    )}
</select>
    <label htmlFor="num">Número</label>
    <input id="num" type="number" maxLength={4} minLength ={3} placeholder='numero' value={numero} onChange = {(event)=>onInputChangeN(event)} />
    <label htmlFor="precio">Precio</label>
    <input id="precio" type="number" maxLength={4} minLength ={3} placeholder='precio' value={precio} onChange = {(event)=>onInputChange(event)} />
    <button onClick={()=>setNewCompra()}>Añadir</button>
    <button onClick={()=>mostarLoteria()}>mostrar</button>


    {compras.map((x, index) => {
      return(
          <div>

          <label htmlFor="">{x.nloteria}</label>
          <label htmlFor="">{x.num}</label>
          <label htmlFor="">{x.price}</label>
          </div>
          
      
   
    )})}


    </div>
    
  </>
  
)
  
}

export default App
