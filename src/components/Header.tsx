import { Navbar } from './ui/tailwind/navbar'
import { Avatar } from './ui/tailwind/avatar'
import photo from '../assets/profile_pic.png'
import { useLocation } from 'react-router'
import { Link } from 'react-scroll'

const navBarLinks = [{location: '/', title: 'Home'}, {location: '/experience', title: 'Experience'}, {location: '/profile', title: 'Profile'}, {location: '/contact', title: 'Contact'}]

//console.log('location ', location)
export default function Header({clickHandler, currentNav, setCurrentNav }: {clickHandler: ()=>void, currentNav: string, setCurrentNav: (newPath: string)=>void}) {
    

    function handleClick(newPath: string) {
        clickHandler();
        setCurrentNav(newPath);
        console.log('setting nav to ',newPath)
    }
    const location = useLocation()        
    console.log('location ',location)
  return (    
        <div className="sticky top-0 mx-auto bg-sky-700/80 h-20 text-white z-20" >
            <Navbar className="flex justify-between w-3/4 mx-auto">
                <Link onClick={()=>handleClick("/")} to="/">   
                    <Avatar className="size-15 cursor-pointer" src={photo} />
                </Link>
                <div className="flex gap-3 align-bottom">
                    {navBarLinks.map((link)=><Link onClick={()=>handleClick(link.location)} offset={link.location=="/"?-80:0} key={link.location} to={link.location} smooth={true} duration={500} className={`nav-link ${link.location==currentNav?"active":""}`}>{link.title}</Link>)}                    


                </div>
            </Navbar>
        </div>   
    
  )
}