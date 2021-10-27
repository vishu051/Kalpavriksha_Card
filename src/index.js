// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import"./index.css";

// Book data
const book1 ={
    title : "Angels and Demons",
    publisher : "Penguin Random House",
    author : "Dan Brown",
    price : 409,
    prodId : 2012,
}

// Book data
const book2 ={
    title : "Norse Mythology",
    publisher : "Bloomsbury Publishing",
    author : "Neil Gaiman",
    price : 300,
    prodId : 2019,
}
let best
function createCard(book) {

    if(book.price < 400)
    {
       best = <h7 className = "text-success" >-Bestseller</h7>
    }
        return(
            <div className= "col-md-6">
               <div class="card">
         
    
                    <div class="card-body" style={{paddingBottom:'20%'}}>
                      <h3 class="card-title"><b>{book.title}</b></h3>
                      <span className="card-text">Author:<b>{book.author}</b></span><br/>
                      <span className="card-text">Publisher:<b>{book.publisher}</b></span><br/>
                      <span className="card-text">Price:<b>{book.price}<span>{best}</span></b></span><br/><br/>
                      <span className="card-text">productId:{book.prodId}</span><br/>
                      
                    </div>
                </div>
            </div>
        )

  // Implement a Single Card creation
}

function getBookDetails(){
  const bookArr = [book1, book2];
  // Use bookArr, and CreateCard function here to display cards 
  // based on required logic
  var res = []
  for(let i in bookArr)
  {
    res.push(createCard(bookArr[i]))
  }
  return (
    <div className = "container" >
      <h1 className="text-center" style = {{color:"blue"}}>Featured Titles</h1>
     
      {/* <div className="row" style = {{padding:'0% 5% 0% 5%'}}> */}
      <div className="row" style = {{padding:'0% 5% 0% 5%'}}>
        {res}
      </div>
    </div>
  );
}

ReactDOM.render(getBookDetails(), document.getElementById('root'));