import { useState } from "react"

function App() {
  const [state, setState] = useState("")

const handleClick = (event : React.MouseEvent<HTMLTableCellElement>) => {
  if(state === ""){
  const cell = event.currentTarget;
  cell.textContent = "X";
  setState("X");
  }else if(state === "X"){
    const cell = event.currentTarget;
    cell.textContent = "O";
    setState("O");
  }else if(state === "O"){
    const cell = event.currentTarget;
    cell.textContent = "X";
    setState("X");
  }else{
    const cell = event.currentTarget;
    cell.textContent = "";
    setState("");
  }
}

  return (
    <>
    <div className="flex items-center justify-center h-screen w-full">

      <table className=" bg-gray-100 rounded-md w-auto h-auto flex items-center justify-center">
        <tbody>
          <tr>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>

          </tr>
          <tr>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>

          </tr>
          <tr>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>

          </tr>

           <tr>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>
            <td className="border border-gray-300 p-6 w-2 cursor-pointer" onClick={(event)=>handleClick(event)}></td>

          </tr>
          
        </tbody>
      </table>
    
    </div>
    </>
  )
}

export default App
