import Image from 'next/image';
export default function Testing() {
    
    const Comp2 = ({ name }: { name: string }) => {
        return (
            <div className="group  active:scale-[1.02] cursor-pointer transition-all duration-300 transform">
                <div className={`p-1 w-[375px] z-[100]`}
                    aria-hidden="true">
                    <a tabIndex={-1} href="/react/listbox">
                        {(name == "Basic" && <Image width={3140} height={1570} className="rounded-2xl w-full" src="/test2.png" alt="s" />)
                            ||
                            (name == "Dropdown" && <Image width={3140} height={1570} className="rounded-2xl w-full" src="/ji3.png" alt="s" />)
                            ||
                            <Image width={3140} height={1570} className="rounded-2xl w-full" src={`/${name}.png`} alt="s" />
                        }
                    </a>

                </div>

                <div className={`h-[90px] group-hover:shadow-xl  ${name=="Input" && "group-hover:shadow-[#FF3436]"} ${name=="Card" && "group-hover:shadow-[#FF6F4C]"} ${name=="List" && "group-hover:shadow-[#4B6BCA]"} ${name=="Button" && "group-hover:shadow-[#48B298]"}   ${name == "Basic" && "group-hover:shadow-[#3397CA]"} ${name == "Dropdown" && "group-hover:shadow-[#A26DE5]"}   group-hover:translate-y-[-8px] z-[10] transition-all duration-300 transform rounded-xl w-full text-center text-2xl flex bg-gray-900 px-1 py-2
            `}>
                    <a className="m-auto font-medium text-white" href="/react/transition">
                        {name}</a>
                </div>
            </div>
        )

    }

    return (
        <div className=" font-Poppins ">


            <header className="sticky top-0 z-30 h-[72px] bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90">

                <div className="mx-auto max-w-8xl xl:px-8">
                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
                        <a className="text-2xl block" href="/react">
                            Mage Components
                        </a >
                        <a className="text-gray-400 hover:text-white" href="https://github.com/pablojosecodes/mage">
                            <span className="sr-only">
                                GitHub repository</span>
                            <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                        </a>
                    </div >
                </div >
            </header >

            <div>
                <div className="  mx-auto max-w-8xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h1 className="mt-24 mb-12 text-2xl font-extrabold text-white sm:text-3xl md:max-w-4xl">
                            Highly extensible and minimal React components, purpose-built for TailwindCSS.</h1>
                    </div>
                </div>
                <div id="react-nav" className="overflow-hidden" role="tabpanel" tabIndex={0} aria-labelledby="react-nav-tab">
                    <div className="border-t border-gray-700" >
                        <div className="py-[48px] px-[48px] w-full flex flex-wrap gap-x-[56px] gap-y-[42px]  bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90 justify-between">

                            <Comp2 name="Card" />
                            <Comp2 name="Dropdown" />
                            <Comp2 name="Button" />


                            <Comp2 name="Input" />
                            <Comp2 name="List" />


                            <Comp2 name="Dropdown" />
                            <Comp2 name="Modal" />


                            <Comp2  name="Chip" />


                            {/* <Comp col1={2} row1={20} col2={4} row2={10} col3={2} row3={8} name="Progress" /> */}
                            {/* <Comp col1={2} row1={6} col2={2} row2={4} col3={6} row3={2} name="Toggle" /> */}


                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90 mx-auto max-w-8xl">
                    <div className="px-4 py-16 sm:px-6 lg:px-8">
                        <footer className="flex items-center space-x-2 border-t border-gray-800 pt-10">
                            <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-gray-400">
                                A project by</p>
                            <div>
                                <a href="https://github.com/pablojosecodes/mage">
                                    <span className="">
                                        Mage AI</span>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div >
    )
}


