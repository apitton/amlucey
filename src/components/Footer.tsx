import legal500 from '../assets/legal500.png'

const navigation = [
  
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anne-marie-lucey-50a69844/',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 17 17" {...props}>
        <path
          fillRule="evenodd"
          d="M13.28 13.283h-2.222V9.802c0-.83-.017-1.898-1.157-1.898-1.158 0-1.335.903-1.335 1.837v3.542H6.344V6.125h2.134v.976h.029c.298-.563 1.023-1.157 2.106-1.157 2.25 0 2.667 1.482 2.667 3.41zM3.835 5.146c-.715 0-1.29-.58-1.29-1.291a1.288 1.288 0 1 1 2.58 0c0 .712-.578 1.29-1.29 1.29m1.113 8.137H2.722V6.125h2.227zM14.391.5H1.607C.995.5.5.984.5 1.58v12.84c0 .597.495 1.08 1.107 1.08h12.782c.611 0 1.111-.483 1.111-1.08V1.58C15.5.985 15 .5 14.389.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]



export default function Footer() {
  return (
    <footer className="bg-sky-700/80">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 flex justify-around">
        <div>
          <img src={legal500} className="size-12"/>
        </div>
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
          
        </p>
      </div>
    </footer>
  )
}
