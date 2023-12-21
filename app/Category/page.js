"use client";
import { useState } from "react";
export default function Category() {
  const [option, setoption] = useState(false);
  const [field, setfield] = useState([]);
  const [faildName, setfaildName] = useState('');
  const [CategoryName, setCategoryName] = useState('');
  const [Categories, setCategories] = useState([]);
  const [EditMood, setEditMood] = useState(false);
  const [indexnum, setiindexnum] = useState(false);
  
  const [faildNamePop, setfaildNamePop] = useState(false);
  const handleInputChange = (e) => {
    setfaildName(e.target.value);
  };
  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };
  const handleAddInput = () => {
    setfield((prevArray) => [...prevArray, faildName]);
    setfaildName('');
    setfaildNamePop(!faildNamePop);
  };
  const handleAddCategory=()=>{
    setEditMood(false);
    setCategories((prevArray)=>[...prevArray,{
        name:CategoryName,
        field:field
    }])
    setfield([]);
    setoption(!option);
    setCategoryName('');
  }
  const handleEditButton=(e)=>{
    setEditMood(true);
    setiindexnum(e.index)
    setoption(!option);
    console.log(e);
    setCategoryName(e.name);
    setfield(e.field);


  }
  const handleUpdateCategory=(e)=>{
      setEditMood(false);
    console.log('Categories');
    console.log(Categories);
    var oldCategories=Categories;
    oldCategories[indexnum]={
        name:e.name,
        field:e.field
    }
    console.log('oldCategories');
    console.log(oldCategories);
    setCategories(oldCategories);
    setoption(!option);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
        {
faildNamePop?<div className="flex flex-col p-4 w-2/4 h-auto bg-green-300 gap-2  m-16 rounded-md">
                        <input  value={faildName}  onChange={handleInputChange} type="text" placeholder="field Name" className="text-black placeholder-gray-700 p-2 rounded-md w-full"></input>
                        <button onClick={handleAddInput} className="w-full rounded-md bg-[#3B460D] p-2 text-white font-bold">Add</button>
            <button onClick={()=>{setfaildNamePop(!faildNamePop)}} className="w-full rounded-md bg-red-800 p-2 text-white font-bold">Delete</button>


</div>:<>     
     
      {option ? (
          <div className="h-screen w-full flex flex-col p-8 gap-2 text-black text-xl justify-start items-center">
          <div className="rounded-md p-2 px-8 text-black bg-green-300 gap-2 flex-col flex items-center">
            <h1 className="my-4 font-bold">Delete Form</h1>
            <input value={CategoryName} onChange={(e)=>handleCategoryName(e)}  type="text" placeholder="Category Name" className="placeholder-gray-700 p-2 rounded-md w-full"></input>
            {field?.map((e,index)=>{
                return(
                <>
              
                    <input type="text" placeholder={e} className="placeholder-gray-700 p-2 rounded-md w-full"></input>
                </>
                    )
                })}

            <button onClick={()=>{setfaildNamePop(!faildNamePop)}} className="w-full rounded-md bg-[#3B460D] p-2 text-white font-bold">More field +</button>
            {
                EditMood?<>
                <button onClick={(e)=>handleAddCategory({name:CategoryName,field:field})} className="w-full rounded-md bg-yellow-800 p-2 text-white font-bold">update</button>
                
                </>:
            <button onClick={handleAddCategory} className="w-full rounded-md bg-[#3B460D] p-2 text-white font-bold">Add Category</button>
            }
          </div>
        </div>
      ) : (
          <div className="h-screen w-full flex flex-col p-8 gap-2 text-black text-xl justify-start items-center">
          <button
            onClick={() => setoption(!option)}
            className="bg-green-900 text-white font-bold rounded-md p-2 px-8"
            >
            Add Category
          </button>
          <div className="rounded-md p-2 px-16 text-black bg-green-300">
                {
                    Categories.map((e,index)=>{
                        return(
                            <div key={index}>
                            <div className="flex flex-row justify-between items-center w-full gap-8 my-4">
              <h1 className="text-xl text-black font-bold">{e.name}</h1>
              <div className="flex flex-row gap-1">
                <button onClick={()=>handleEditButton({name:e.name,field:e.field,index})} className="p-2 rounded-md text-white bg-yellow-800">
                  Edit
                </button>
                <button className="p-2 rounded-md text-white bg-red-800">
                  Delete
                </button>
              </div>
            </div>
                            </div>
                        )
                    })
                }
            <div className="flex flex-row justify-between items-center w-full gap-8 my-4">
              <h1 className="text-xl text-black font-bold">Name of Category</h1>
              <div className="flex flex-row gap-1">
                <button onClick={handleEditButton} className="p-2 rounded-md text-white bg-yellow-800">
                  Edit
                </button>
                <button className="p-2 rounded-md text-white bg-red-800">
                  Delete
                </button>
              </div>
            </div>
            
            <div className="flex flex-row justify-between items-center w-full gap-8 my-4">
              <h1 className="text-xl text-black font-bold">Name of Category</h1>
              <div className="flex flex-row gap-1">
                <button onClick={handleEditButton} className="p-2 rounded-md text-white bg-yellow-800">
                  Edit
                </button>
                <button className="p-2 rounded-md text-white bg-red-800">
                  Delete
                </button>
              </div>
            </div>
            
            <div className="flex flex-row justify-between items-center w-full gap-8 my-4">
              <h1 className="text-xl text-black font-bold">Name of Category</h1>
              <div className="flex flex-row gap-1">
                <button className="p-2 rounded-md text-white bg-yellow-800">
                  Edit
                </button>
                <button className="p-2 rounded-md text-white bg-red-800">
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
    }
    </div>
  );
}
