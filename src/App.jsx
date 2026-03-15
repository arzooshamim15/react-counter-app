import { useState } from "react"

function App() {
  let [count,setCount] = useState(0)

  function addValue(){
    setCount(count + 1)
  }

  function removeValue(){
    setCount(count - 1)
  }

return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    backgroundColor:"#f2f2f2",
    padding: "30px",
    
  }}>

  <div style={{
    border:"1px solid #ccc",
    padding:"30px",
    borderRadius:"10px",
    boxShadow:"0 5px 15px rgba(0,0,0,0.2)",
    textAlign:"center",
    backgroundColor:"white",
    fontFamily:"system-ui",
  }}>

 <h1 style={{color:"purple"}}>My React Counter App</h1>

 <h3 style={{fontSize:"30px", color:"green"}}>
   Count : {count}
 </h3>

   <button 
     onClick={addValue}
     style={{
      
       padding:"10px 20px",
       margin:"10px",
       backgroundColor:"green",
       color:"white",
       border:"none",
       borderRadius:"5px",
       fontSize:"18px",
       fontFamily:"system-ui",
       fontWeight:"bolder",
       cursor:"pointer"
     }}
   >
     Add Value
   </button>

   <button 
     onClick={removeValue}
     style={{
      fontSize:"18px",
      fontFamily:"system-ui",
      fontWeight:"bolder",
       padding:"10px 20px",
       margin:"10px",
       backgroundColor:"red",
       color:"white",
       border:"none",
       borderRadius:"5px",
       cursor:"pointer"
     }}
   >
     Remove Value
   </button>

  </div>
  </div>
)
}

export default App