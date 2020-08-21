import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['sallu', 'callu', 'mallu','shuvo','lotif'];
const Products =[
  {name: 'Photoshop', price:'$90.54'},
  {name: 'Illustrator', price:'$60.55'},
  {name: 'PDF Reader', price:'$6.10'},
  {name: 'Premium Elements', price:'$541.580'},
  {name: 'Premium El', price:'$51.50'}
];
const friendsDetails = [
  {name: 'Galib', age: '21'},
  {name: 'Ridoy', age: '20'},
  {name: 'Dalib', age: '25'},
  {name: 'Calib', age: '22'},
]



  return (
    <div className="App">
      <header className="App-header">
<p>I am a React Person</p>
<Counter></Counter>
<Users></Users>

<ul>
{
  nayoks.map(nayok => <li>{nayok}</li>)
}
{
  Products.map(product => <li>{product.name}</li>)
}
</ul>
{
  Products.map(pd => <Product product={pd}></Product>)
}
{/* <Product product = {Products[0]}></Product>
<Product product = {Products[1]}></Product>
<Product product = {Products[2]}></Product> */}
{
  friendsDetails.map(friend => <Friends friendsDetails={friend}></Friends>)
}

<Person nayok={nayoks[0]} naika='bobita'></Person> {/*using array*/} 
<Person nayok = 'Sakib'></Person>
<Person></Person>
<Person></Person>
        </header>
       
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    },[]
  )


  return(
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}


function Counter(){
  const [count , setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = { () => setCount(count - 1)}> DECREASE</button>
      <button onClick = { () => setCount(count + 1)}>INCREASE</button>
    </div>
  )
}

function Friends(props){
  const friendStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'gray',
    height: '250px',
    width: '200px',
    float:'left',
    marginBottom: '5px'
  }
  const {name, age} = props.friendsDetails
  return(
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h5>{age}</h5>
    </div>
  );

}

function Product(props){
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'gray',
    height: '250px',
    width: '200px',
    float:'left',
    marginBottom: '5px'
    
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
<h3>{name}</h3>
  <h5>{price}</h5>
<button>Buy now</button>
    </div>
  )
}






function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    width: '500px',
  }
  return(
  <div style = {personStyle}>
   <h1>Name: {props.nayok}</h1>
  <h3>Hero Of {props.naika}</h3>
   </div>
  );
}

export default App;
