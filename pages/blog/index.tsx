
import Head from "next/head";
import { getFrontmatters } from '../../src/components/mdx'
import { FrontMatter, BlogCard } from '../../src/components/card'


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
                <title>Blog | STG</title>
            </Head>
            <ul className="container px-2 pt-24 mx-auto">
                { matters.map((matter) => BlogCard(matter)) }
            </ul>
        </>
    )
}
