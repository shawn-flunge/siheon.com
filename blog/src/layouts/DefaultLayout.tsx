
import NavBar from '@/components/NavBar'
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer';



export default function DefaultLayout({children} : any){


    return <>
        <NavBar/>
        <main className='px-2'>{children}</main>
        {/* <Footer/> */}
    </>

}