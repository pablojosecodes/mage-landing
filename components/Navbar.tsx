'use client'

export default function NavBarPage({ index }: { index: number }) {
    return (
        <nav className="fixed flex justify-center bg-transparent  w-screen z-[100] top-0 left-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl grid grid-cols-4 w-full  ">
                <a href="https://matick.xyz/" className="text-4xl md:col-span-1 col-span-2 flex  w-full  items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
                    <div className=" w-[90%]  justify-left flex">


                        <span className="font-RecoletaBold text-4xl text-[#4778CE] ">
                            Manag
                        </span>
                        <span className="font-RecoletaBold text-4xl  text-[#71CACD] ">
                            ESG
                        </span>
                    </div>
                </a>
                <div className="md:block hidden md:col-span-1 col-span-0  md:visible invisible w-full flex justify-center">
                    <div className="grid grid-cols-3  text-sm text-white w-[90%]  max-w-[20rem] gap-x-3 h-full">
                        <div
                            onClick={() => window.open("/", "_self")} className={`hover:underline hover:font-bold cursor-pointer pt-[1rem] my-auto ${index == 0 && "text-[#4778CE]"} font-Recoleta text-2xl`}>
                            Home
                        </div>
                        < div
                            onClick={() => window.open("/about", "_self")} className={`hover:underline hover:font-bold cursor-pointer pt-[1rem] my-auto ${index == 1 && "text-[#4778CE]"}  font-Recoleta text-2xl`}>
                            About
                        </div>
                        <div onClick={() => window.open("/contact", "_self")}
                            className={`hover:underline hover:font-bold cursor-pointer pt-[1rem] my-auto ${index == 2 && "text-[#4778CE]"}  font-Recoleta text-2xl`}>
                            Contact
                        </div>
                    </div>
                </div>
                <div>

                </div>


                <div className="w-full flex justify-center">
                    <div className="w-[90%] justify-end  gap-x-[2rem] flex">
                        <button onClick={() => window.open("/login", "_self")} className="bg-[#71CACD] p-[1rem] my-[1rem] text-white px-[2rem] font-Recoleta rounded-md">
                            Log in
                        </  button>
                        <button className="bg-[#4778CE] my-[1rem] text-white  p-[1rem] px-[2rem] font-Recoleta rounded-md">
                            Sign up
                        </  button>
                    </div>
                </div>
            </div>
        </nav >

    )
}
