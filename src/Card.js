import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Card.css';

const Card = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const response =await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            }catch(error){
                console.error('Error to fecth products',error);
            }
        };

        fetchProducts();
    },[]);




  return (
    <div className='main'>
        <h2>Product List</h2>
        <div className='card-container'>
            {products.map((product)=>(
                
                <div className='card' key={product.id}>
                    {/* <h3>{product.title}</h3> */}
                    <img className="image-class"src={product.image} alt=''/>
                    <div className='card-title'>
                        <p className='title1'>Saloon</p>
                        <p className='title1'>Men's haircut</p>
                        <p className='title1'>Beauty</p>
                    </div>
                    <div className='card-title2'>
                        <p className='title2-1'>{product.title}</p>
                        <p className='title2-2'>{product.category}</p>
                        <p className='title2-3'>4.8 <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span> 376 Ratings &hearts;</p>
                        <p className='title2-4'><i class="material-icons">&#xe567;</i>Yishun, Singapore </p>
                        <p className='title2-5'>starts from</p>
                        
                    </div>
                    <div className='last-items'>
                    <p className='title3-1'>${product.price}</p>
                    <p className='title3-2'><del>7.50</del></p>
                    <p className='title3-3'>20% OFF</p>
                    </div>
                    
                    
                </div>
            ))}

        </div>

    </div>
  );

};
export default Card