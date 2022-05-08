import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
     {/* <Counter></Counter> */}
     <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setUsers(data))
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user=> <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () => (setCount(count + 1))
  const deacreaseCount = () => (setCount(count-1))
 
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={deacreaseCount}>Decrease</button>
    </div>
  )
}


// function App() {
//   // const products = [
//   //   {name: 'laptop', price: 150000},
//   //   {name: 'Phone', price: 150000},
//   //   {name: 'watch', price: 150000},
//   //   {name: 'tablet ', price: 150000},
//   // ]
//   return (
//     <div className="App">
//       {/* {
//         products.map(product => <Product name={product.name} price={product.price}> </Product>)
//       } */}
//      {/* <Product name='laptop' price='90000'></Product>
//      <Product name='phone' price='75000'></Product>
//      <Product name='watch' price='3000'></Product> */}
//     </div>
//   );
// }
// ---------------------------------------------------
// function Product(props){
//   return (
//     <div className='product'>
//       <h3>Name:{props.name} </h3>
//       <p>Price: {props.price} </p>
//     </div>
//   )
// }

export default App;
