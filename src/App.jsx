import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  let [data, setdata] = useState([])
  const [inp1, setInp1] = useState(null)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setdata(json))
  },[])

  const get = () => {
    if(inp1 != ''){
      fetch(`https://fakestoreapi.com/products/${inp1}`)
      .then(res => res.json())
      .then(json => setdata([json]))
    }else{
      fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => setdata(json))
    }
  }
  const getAll = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => setdata(json))
  }
  const getLimit = () => {
    fetch(`https://fakestoreapi.com/products?limit=${inp1}`)
      .then(res => res.json())
      .then(json => setdata(json))
  }

  const Input =(e)=>{
      setInp1(e.target.value)
  }
  
  return (
    <>
      <div className="container">
        <div className="btn">
          <input onChange={Input} type="text" />
          <button onClick={get}>Get one</button>
          <button onClick={getLimit}>Limit</button>
          <button onClick={getAll}>All</button>
        </div>
        </div>
        <div className='container'>
        <div className="cards">
          {data.map(( item, key) => {
            return (
              <Card key={item.id} data={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
