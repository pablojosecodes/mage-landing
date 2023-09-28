export default function Summer() {
    return (<div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 transition bg-black">
            <div className="container flex h-14 items-center justify-between">
                <div className="flex items-center justify-center gap-6 md:gap-10 text-white">
                    <a href="/" className="flex items-center space-x-2 md:flex">
                        <img alt="Summer logo" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummer-logo-green.07ccb9f6.png&amp;w=256&amp;q=75" width="125" height="23" decoding="async" data-nimg="1" className="sm:inline-block" />
                    </a>
                    <nav className="gap-6 md:flex">
                    </nav>
                </div>
                <nav className="flex items-center space-x-4 text-white">
                    <a href="/#join" className="flex items-center">
                        Join us</a>
                </nav>
            </div>
        </header>
        <main className="flex-1 overflow-x-clip">
            <div data-nextjs-scroll-focus-boundary="">
                <div className="container relative grid items-center pb-8 md:pb-12 lg:pb-20">
                    <section className="flex min-h-[calc(100vh-56px)]">
                        <div className="flex w-full flex-col justify-center gap-6 md:max-w-4xl">
                            <h1 className="text-center font-ohno text-4xl uppercase md:text-left md:text-6xl">
                                <span data-br=":R1breje:" data-brr="1" >
                                    Data is finally getting
                                    <span className="text-pink">
                                        fun</span>
                                    <span className="text-green">
                                        fast</span>
                                    &amp;
                                    <span className="text-blue">
                                        powerful</span>
                                </span>

                            </h1>
                            <p className="text-center text-lg md:text-left md:text-2xl">
                                <span data-br=":R2breje:" data-brr="1" >
                                    We're a small, well funded team building the data platform of the future.</span>

                            </p>
                            <div className="flex">
                                <form className="newsletter-form relative flex w-full flex-col items-center gap-2 md:max-w-lg md:flex-row">
                                    <label className="sr-only" htmlFor="email">
                                        Email</label>
                                    <input id="email" placeholder="Signup for our newsletter!" className="block w-full rounded border-2 border-black px-4 py-3 font-mono text-black placeholder:text-black focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-100" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" name="email" />
                                    <button type="submit" className="font-mono cursor-pointer inline-flex items-center justify-center rounded-md border transition duration-150 ease-in-out bg-black text-white border-2 border-black hover:text-blue py-3 px-6 pointer-events-auto absolute right-0 hidden h-[52px] w-[52px] items-center justify-center rounded bg-black text-white shadow-lg hover:text-blue md:flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute h-5 w-5 transition">
                                            <line x1="22" y1="2" x2="11" y2="13">
                                            </line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2">
                                            </polygon>
                                        </svg>
                                    </button>
                                    <button type="submit" className="font-mono cursor-pointer inline-flex items-center justify-center rounded-md border transition duration-150 ease-in-out bg-black text-white border-2 border-black hover:text-blue w-full py-3 px-6 md:hidden">
                                        Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-end">
                            <div className="hidden h-[500px] w-[450px] bg-magnify bg-contain bg-no-repeat md:block">
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col justify-center gap-8">
                        <h1 id="join" className="scroll-mt-20 text-center font-ohno text-3xl uppercase sm:text-4xl md:text-left md:text-6xl">
                            Join us, we're hiring!</h1>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <a className="relative" href="/jobs/backend-engineer">
                                <div className="absolute inset-0 rounded bg-black">
                                </div>
                                <div className="relative flex flex-col gap-2 rounded border-2 border-black bg-white p-4 transition hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-blue">
                                    <span className="font-mono text-sm text-black">
                                        Engineering - Platform</span>
                                    <span className="text-base md:text-2xl">
                                        Senior Backend Engineer</span>
                                    <span className="flex items-center font-mono text-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                                            <path d="M15 21v-4a2 2 0 0 1 2-2h4">
                                            </path>
                                            <path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3">
                                            </path>
                                            <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4">
                                            </path>
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                        </svg>
                                        Remote</span>
                                </div>
                            </a>
                            <a className="relative" href="/jobs/data-engineer">
                                <div className="absolute inset-0 rounded bg-black">
                                </div>
                                <div className="relative flex flex-col gap-2 rounded border-2 border-black bg-white p-4 transition hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-pink">
                                    <span className="font-mono text-sm text-black">
                                        Engineering</span>
                                    <span className="text-base md:text-2xl">
                                        Distributed SQL Engineer</span>
                                    <span className="flex items-center font-mono text-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                                            <path d="M15 21v-4a2 2 0 0 1 2-2h4">
                                            </path>
                                            <path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3">
                                            </path>
                                            <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4">
                                            </path>
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                        </svg>
                                        Remote</span>
                                </div>
                            </a>
                            <a className="relative" href="/jobs/founding-marketer">
                                <div className="absolute inset-0 rounded bg-black">
                                </div>
                                <div className="relative flex flex-col gap-2 rounded border-2 border-black bg-white p-4 transition hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-green">
                                    <span className="font-mono text-sm text-black">
                                        Marketing</span>
                                    <span className="text-base md:text-2xl">
                                        Founding Marketer</span>
                                    <span className="flex items-center font-mono text-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                                            <path d="M15 21v-4a2 2 0 0 1 2-2h4">
                                            </path>
                                            <path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3">
                                            </path>
                                            <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4">
                                            </path>
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                        </svg>
                                        Remote</span>
                                </div>
                            </a>
                            <a className="relative" href="/jobs/fullstack-js-engineer">
                                <div className="absolute inset-0 rounded bg-black">
                                </div>
                                <div className="relative flex flex-col gap-2 rounded border-2 border-black bg-white p-4 transition hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-orange">
                                    <span className="font-mono text-sm text-black">
                                        Engineering</span>
                                    <span className="text-base md:text-2xl">
                                        Full Stack Javascript Engineer</span>
                                    <span className="flex items-center font-mono text-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                                            <path d="M15 21v-4a2 2 0 0 1 2-2h4">
                                            </path>
                                            <path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3">
                                            </path>
                                            <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4">
                                            </path>
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                        </svg>
                                        Remote</span>
                                </div>
                            </a>
                            <a className="relative" href="/jobs/sr-ux-designer">
                                <div className="absolute inset-0 rounded bg-black">
                                </div>
                                <div className="relative flex flex-col gap-2 rounded border-2 border-black bg-white p-4 transition hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-blue">
                                    <span className="font-mono text-sm text-black">
                                        Design</span>
                                    <span className="text-base md:text-2xl">
                                        Senior UX Designer</span>
                                    <span className="flex items-center font-mono text-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                                            <path d="M15 21v-4a2 2 0 0 1 2-2h4">
                                            </path>
                                            <path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3">
                                            </path>
                                            <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4">
                                            </path>
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                        </svg>
                                        Remote</span>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <footer className="relative mt-[210px] bg-black text-white">
            <div className="absolute left-0 right-0 -top-[210px] z-10">
                <img alt="Sunny wave" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsunny-wave.fc278439.png&amp;w=640&amp;q=75" width="252" height="239" decoding="async" data-nimg="1" className="mx-auto" />
            </div>
            <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                <span className="font-mono t text-blue">
                    ©
                    2023
                    Summer Forever Co.</span>
                <div className="flex items-center justify-center space-x-2">
                    <a href="mailto:wave@summer.io" target="_blank" rel="noreferrer">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 fill-black text-blue hover:fill-blue hover:text-black">
                                <rect x="2" y="4" width="20" height="16" rx="2">
                                </rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                                </path>
                            </svg>
                            <span className="sr-only">
                                Email</span>
                        </div>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/summer_io">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 fill-black text-blue hover:fill-blue">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
                            <span className="sr-only">
                                Twitter</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    </div>
    )
}