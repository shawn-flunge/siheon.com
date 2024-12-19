import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


type NavItemType = {route: string, name: string}; 



function NavBar(){
    const pages : NavItemType[] = [
        {route: '/blog', name: 'Blog'},
    ]

    return <>
        <nav className="container fixed top-0 left-0 right-0 flex items-center justify-between py-4 mx-auto">

            <Link key='/' href='/'>
                <div className="font-mono text-2xl sm:px-4">
                    Shawn
                </div>
            </Link>
            
            {/* <a href="/resume.pdf" download="Flutter개발자 이시헌" className="p-2 ">
                RESUME
            </a> */}
        </nav>

    </>
}

export default NavBar;