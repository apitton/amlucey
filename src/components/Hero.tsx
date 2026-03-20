import { Link } from 'react-scroll'

export default function Hero() {

    return (
        <div className="relative h-[calc(100dvh-20*var(--spacing))] animate-on-scroll" id="/">
            <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl pl-6">        

                <div className="relative px-6">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="bg-purple-400/40 rounded-xl w-auto flex flex-col align-middle text-center p-2">
                        <h1 className="text-3xl cinzel-font font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">ANNE-MARIE LUCEY</h1>
                        <br></br>
                        <h2 className="text-2xl">Barrister, Family and International Law</h2>
                        
                    </div>
                    <p className=" text-center mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                    I am a barrister specialized in family Law with 20 years experience. I am part of Trinity Chambers in Chelmsford.
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                    <Link to="/contact"
                        className="rounded-md bg-title px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 cursor-pointer"
                    >
                        Contact me
                    </Link>                  
                    </div>
                </div>
                
                </div>
                
            </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
                <div className="h-full w-full polygon sepia opacity-80"></div>
            {/*<img
                alt=""
                src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
            />*/}
            </div>
        </div>
  )
}
