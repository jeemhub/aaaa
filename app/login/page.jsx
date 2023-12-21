import NavBar from "../components/NavBar"
export default function Login(){

    return(
        <>
        <NavBar/>
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col gap-2 p-8 rounded-lg bg-[#3B460D] w-3/4 h-auto" >
            <h1 className="text-white text-xl font-bold bg-[#3B460D]">LOGIN</h1>
            <input type="text" placeholder="User Name " className="bg-[#96AB46] p-2 rounded-md placeholder-white  bold-placeholder"></input>
            <input type="password" placeholder="Password " className="bg-[#96AB46] p-2 rounded-md placeholder-white bold-placeholder"></input>
            <button className="p-4 text-black bg-[#ff9b24] rounded-md font-bold">Login</button>
        </div>
        </div>
        </>
    )
}