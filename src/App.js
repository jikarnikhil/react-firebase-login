import React from 'react'

const LIST = [
  {
    id: '1',
    title: 'The Road to React'
  },
  {
    id: '2',
    title: 'The Road To Subway'
  }
]

const App = () => {
  const [list, setList] = React.useState([]);

  const handleFetch=()=>{
    setList(LIST)
  }

  if(list.length){
    return(
      <div>
        <button type="button" onClick={handleFetch}>
          Fetch
        </button>
      </div>
    )
  }else{
    return <h1>kaisa laga mera majak</h1>
  }
  return (
    <div>
      <List list={list} />
    </div>
  )
}

const List=({list}) => {
  return(
    <ul>
      {list.map((item)=>(
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

const Item =({item}) =>{
  return(
    <li key={item.id}>
      <span>{item.title}</span>
    </li>
  )
}

export default App
