import React from 'react'
import {porducts} from '../componet/Json'
import Card from '../componet/Card'
import '../componet/css/Card.css'
const Homes = () => {
  return (
    <div>
      
      <section className='cards__container'>{
           porducts.details.map((product)=>{
                return(
                    <div>
                <Card name = {product.name} 
                    Img ={product.imageURL}
                 price = {product.price}
                 id = {product.productId}
                 />
                 </div>
                )
            })
        }
        </section>
    </div>
  )
}

export default Homes