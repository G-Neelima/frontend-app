import { useState,useEffect,useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Content.css"

const API_URL= import.meta.env.VITE_API_URL;

function Content(){
    //const [count,setCount]=useState(0); // usestate hook is used to create a variable and update the variable
    const [products,setProducts] = useState([]);
    const {user, setUser, cart, setCart } = useContext(AppContext);
    // const increment=()=>{
    //     setCount(count+1);
    // }
    // const decrement=()=>{
    //     setCount(count-1);
    // }
    const fetchProducts= async ()=>{
        const url = `${API_URL}/store`; //fetching the information from this url , data is in json format , fetching this live data
        const res= await axios.get(url);
        setProducts(res.data)


    };
    useEffect(()=>{//as soon as we load the page this hook is invoked only once and it invokes fetchProducts
        fetchProducts();
    },[]);
    const addToCart = (product) =>{
        const found = cart.find((item) => item._id === product._id);
        if(!found){
            product.quantity = 1;
            setCart([...cart,product]);
        }
    };
    return (
    <div>
        
        {/* <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
        <hr />  */}
        <div className="row">
            {products.map((product) => (
                <div className="box">
                    <img src={`${API_URL}/${product.imageUrl}`} width="300px" alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <h4>{product.price}</h4>
                    <p><button onClick={() => addToCart(product)}>Add to cart</button></p>
                    </div>
            ))}

        </div>
    </div>
    );
}
export default Content;