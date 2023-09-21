
import '../src/styles/globals.css'

import { AppProps } from "next/app";
import DefaultLayout from '../src/layouts/DefaultLayout';



export default function App({ Component, pageProps }: AppProps){
    return (
        <DefaultLayout >
            <Component {...pageProps} />    
        </DefaultLayout>
    )
}
