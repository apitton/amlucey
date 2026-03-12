import photo from '../assets/profile_pic.png'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle, } from "./ui/alert"
import { CheckCircle2Icon } from "lucide-react"
import { Button } from './ui/button.jsx'

export function AlertBasic(title: string, message: string, handleClick=()=>{}) {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {message}
        <Button onClick={handleClick}>
            Close
        </Button>
      </AlertDescription>      
    </Alert>
  )
}

export default function Contact() {    
    const [buttonInner, setButtonInner] = useState(<span>Send Form</span>)
    const [loading, setLoading] = useState(false)
    const [alert, setAlert]=useState(AlertBasic('',''))
    const [showAlert, setShowAlert] = useState(false)    

    function toogleAlert() {
        setShowAlert((prev)=>!prev);                
    }
    async function handleSubmit(e: any) {
        e.preventDefault();        
        const formData = new FormData(e.target)
        if (!formData.get("email") && !formData.get("phone")) {
            setAlert(AlertBasic('Error', 'Please leave an email address or a phone number.', toogleAlert))
            setShowAlert(true)            
        } else {
            setButtonInner(
                <p className = "flex items-center justify-center">
                    <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Processing…</span>
                </p>)
            setLoading(true)
            
            const res = await fetch('https://www.scanissimo.com/api/mail/sendToAntoine', {method: 'POST', body: formData});
            const result = await res.json();
            console.log(result);
            setAlert(AlertBasic('Message sent successfully', 'Thanks for your message. I will get back to you as soon as possible.', toogleAlert))
            setShowAlert(true)
            setButtonInner(<span>Let's talk!</span>)
            e.target.reset()            
            setTimeout(()=>setLoading(false),10000);
        }
    }    
    
    return (    
    <div className="relative isolate px-6 py-8 dark:bg-gray-900 animate-on-scroll" id="/contact">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl border-bg-bghf p-4 rounded-xl shadow-2xl bg-white/80">
        <h2 className="imgToAnimate cinzel-font text-titletxt bg-purple-400/80 text-3xl font-semibold tracking-tight text-prettysm:text-5xl text-center rounded-xl p-4">
          CONTACT ME
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Please take a minute to fill the form ...
        </p>
        <div className="mt-6 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSubmit} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>              
              <div>
                <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="rmail"
                    type="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">            
              <button
                type="submit"
                className="block w-full rounded-md bg-title px-3.5 py-2.5 text-center text-sm font-semibold text-titletxt shadow-xs hover:bg-title/70 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                disabled={loading}
              >
                {buttonInner}
              </button>              
            </div>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            
            <figure className="mt-10">
              <blockquote className="text-lg/6 font-semibold text-gray-700 dark:text-white">
                <p>
                  You can contact me directly by filling this form.
                </p><br></br>
                <p>
                  You can also contact me via Trinity Chambers
                </p>
                <br></br>
                <p>
                  Tel: 01245 605040
                </p>
                <br></br>                
                <a className="text-gray-700" href="clerks@trinitychambers.com">clerks@trinitychambers.com</a>
                
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src={photo}
                  className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">Anne-Marie Lucey</div>
                  <div className="text-sm/6 text-gray-600 dark:text-gray-400">Barrister</div>
                </div>
              </figcaption>              
              <div className="mt-6">
                    {showAlert && alert}                    
                </div>
            </figure>
            
          </div>
        </div>
      </div>
    </div>
    )
}

