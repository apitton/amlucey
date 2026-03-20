import { Navbar } from './ui/tailwind/navbar'
import { Avatar } from './ui/tailwind/avatar'
import { useLocation } from 'react-router'
import { Link } from 'react-scroll'
import { client } from '@/App'
const navBarLinks = [{location: '/', title: 'Home'}, {location: '/experience', title: 'Experience'}, {location: '/profile', title: 'Profile'}, {location: '/articlesSection', title: 'Articles'}, {location: '/contact', title: 'Contact'}]

export function handleClick({newPath, clickHandler, setCurrentNav}: {newPath: string, clickHandler:()=>void, setCurrentNav:(newPath: string)=>void}) {
        clickHandler();
        setCurrentNav(newPath);
        console.log('setting nav to ',newPath)
    }

//console.log('location ', location)
export default function Header({clickHandler, currentNav, setCurrentNav }: {clickHandler: ()=>void, currentNav: string, setCurrentNav: (newPath: string)=>void}) {
    
    const location = useLocation()        
    console.log('location ',location)
    return (    
            <div className="sticky top-0 mx-auto bg-sky-700/80 h-20 text-white z-20" >
                <Navbar className="flex justify-between w-3/4 mx-auto">
                    <Link onClick={()=>handleClick({newPath: "/", clickHandler, setCurrentNav})} to="/" offset={-80} smooth={true} duration={500}>                       
                    <div className="flex gap-3 cursor-pointer">
                        <Avatar className="size-15" src={client.photo} />
                        <div className="flex flex-col justify-center">
                            <div className="cinzel-font">{client.firstName} {client.lastName}</div>
                            <div className="cinzel-font">{client.role}</div>
                        </div>
                    </div>
                    </Link>
                    <div className="flex gap-3 align-bottom">
                        {navBarLinks.map((link)=><Link onClick={()=>handleClick({newPath: link.location, clickHandler, setCurrentNav})} offset={link.location=="/"?-80:0} key={link.location} to={link.location} smooth={true} duration={500} className={`nav-link ${link.location==currentNav?"active":""}`}>{link.title}</Link>)}                    
                    </div>
                </Navbar>
            </div>   
        
    )
    }