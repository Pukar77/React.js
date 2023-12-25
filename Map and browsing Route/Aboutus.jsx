import React from 'react'
import Products from '../Data/Data'
export const Aboutus = () => {
  const data = [
    { id: 1, name: "Pukar Rimal" },
    { id: 2, name: "Pukar Rimal2" },
    { id: 3, name: "Pukar Rimal 3" },
  ];

  return (
    <div>
    <h1>This is about us page</h1>
    

3

{Products.map((item,i)=>(
  <div> {item.name}  {item.id} </div>
))}


{data.map((item)=>(
  <div>  {item.name} </div>
))}

</div>
  )
}
