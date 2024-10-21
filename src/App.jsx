import React, { useState } from 'react'
import users from './users';
import "./App.css"
const App = () => {
  const [allUsers , setAllUsers] = useState(users);
  const [perPage] = useState(5);
  const [currentPage , setCurrentPage] = useState(1);
  // pagination logics
 const lastIndex =   currentPage * perPage;
 const firstIndex= lastIndex - perPage;
 const totalPages =  Math.ceil(allUsers.length / perPage);
 const currentUsers  =  allUsers.slice(firstIndex , lastIndex)

const paginate = (pageNumber)=>{
  setCurrentPage(pageNumber)
}

const PaginationButtons = ()=>{
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
     pageNumbers.push(<button  className={i === currentPage ? "active" :""}    onClick={()=>{paginate(i)}}>{i}</button>) 
  }

  return pageNumbers
}

function handlePrev(){
   if(currentPage > 1){
     setCurrentPage(currentPage - 1)
   }
}

function handleNext(){
  if(currentPage < totalPages){
    setCurrentPage(currentPage + 1)
  }
}





 return (
    <div>
       {
        currentUsers.map((user, index)=>{
            return  <h5>{user.name} {user.age} {user.email} {user.location}</h5>
        })
       }
       <button onClick={handlePrev} disabled={currentPage=== 1 ? true :false} >Prev</button>
       <PaginationButtons/>
       <button onClick={handleNext} disabled={currentPage== totalPages}>Next</button>
       <h3>{currentPage}/{totalPages}</h3>
    </div>                           
  )
}

export default App
