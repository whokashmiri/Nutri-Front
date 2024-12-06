// import Header from "./Header"
import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"

const Track = () => {
const  loggedData = useContext(UserContext)

const [foodItems, setFoodItems]= useState([])
const [food, setFood] = useState(null)

console.log(loggedData.loggedUser.name);
const name = loggedData.loggedUser.name

 

  function searchFood(event){
    if(event.target.value.length!==0){
      console.log(event.target.value);
    fetch(`http://localhost:8000/foods/${event.target.value}`,{
      method:"GET",
      "Content-Type":"application/json",
      headers:{
        "Authorization":"Bearer "+ loggedData.loggedUser.token

      }
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      if (data.message===undefined) {
        setFoodItems(data)
      } else {
        setFoodItems([])
        
      }
      
      
    }).catch((error)=>{
      console.log(error);
      
    })
    }
    else{
      setFoodItems([])
    }
    
  }

  
  

  
  
  
  return (
    <div>
       <section className="bg-[url('https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center h-screen ">


       <h1 className="text-3xl font-mono font-extrabold"> Welcome {name}</h1>
       <div className="w-screen bg-red-600 absolute">
        <input onChange={searchFood} type="search" placeholder="Search Food" className="w-4/5 h-11 outline-blue-400 indent-2 rounded-xl"/>
        {
          foodItems.length!==0?(
            <div className="w-screen px-4 mt-2">
          {
            foodItems.map((item)=>{
              return(
                <p className="text-yellow-500 text-2xl"
                key={item._id}
              onClick={()=>{
                setFood(food)
              }}
                >{item.name}</p>
              )
            })
          }
        </div>
        ):null
        }
       </div>


       <div className="w-screen p-3 bg-red-400 mt-7 flex"> 
        <div className="w-screen h-auto bg-slate-600">
          <h1>Hello</h1>
        </div>
        <div className="w-screen h-auto bg-red-300 flex flex-wrap">
          <h1 className="w-3/4 text-2xl h-32"> Food Name(100)Cal</h1>
          <div className="w-2/4 pt-2 bg-green-400 text-xl h-32">
            <p>Protein</p>
            <p>230</p>
            
          </div>
          <div className="w-2/4 pt-2 bg-green-400 text-xl h-32">
            <p>Fat</p>
            <p>230</p>
            
          </div>
          <div className="w-2/4 pt-2 bg-green-400 text-xl h-32">
            <p>Carbohydrates</p>
            <p>230</p>
            
          </div>
          <div className="w-2/4 pt-2 bg-green-400 text-xl h-32">
            <p>Fiber</p>
            <p>230</p>
            
          </div>
          <input type="number" placeholder="Quantity In Grams" className="w-4/5 h-11 outline-blue-400 indent-2 rounded-xl" />
          <button type="button" className="px-9 py-3 bg-blue-400 flex items-start rounded-xl cursor-pointer font-bold  hover:bg-sky-700 hover:text-cyan-50" >TRACK</button>

        </div>
       </div>
       </section>

       
     
    </div>
  )
}

export default Track