import Link from "next/link";
import { useRouter } from "next/router";


type NavItemType = {route: string, name: string}; 



function NavBar(){
    const pages : NavItemType[] = [
        {route: '/me', name: 'Me'},
        {route: '/blog', name: 'Blog'},
    ]

    return <>
        <nav className="container fixed top-0 left-0 right-0 flex items-center justify-between py-4 mx-auto">

            <Link key='/' href='/'>
                <div className="font-mono text-3xl sm:px-4">
                    Shawn:~/
                </div>
            </Link>
            
            <div className="sm:px-4">
                {
                    pages?.map((page: NavItemType) => (
                        <Link href={page.route} key={page.route} className="p-1 font-mono font-medium text-gray-900 dark:text-gray-100">
                            {page.name}
                        </Link>
                    ))
                }
            </div>
            
        </nav>

    </>
}

export default NavBar;