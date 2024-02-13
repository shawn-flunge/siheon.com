
import Head from "next/head";
import { getFrontmatters } from '../../src/components/mdx'
import { BlogCard } from '../../src/components/card'
import FrontMatter from '@/interfaces/FrontMatter';


export async function getStaticProps() {
    
    const matters =  getFrontmatters()

    return {
        props: { matters },
    }
}



export default function Posts({ matters }: { matters: FrontMatter[] }){

    return (
        <>
            <Head>
                <title>What's your favorite?</title>
            </Head>
            <ul className="container px-2 pt-24 mx-auto">
                { matters.map((matter) => BlogCard(matter)) }
            </ul>
        </>
    )
}
