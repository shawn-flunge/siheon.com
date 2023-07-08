
import fs from 'fs'
import { GetStaticPaths, GetStaticPropsContext } from "next"
import Head from 'next/head'
import { getFileBySlug } from '../../src/components/mdx'
import MdxComponent from '../../src/components/mdx/MDXComponent';


export default function Post({ post }: any){
    const { mdxSource, frontMatter } = post
    
    return (
        <>
            <Head>
                <title>{frontMatter.slug}</title>
            </Head>
            
            <div className='container px-2 pt-24 mx-auto sm:px-4'>
                <div className='py-10 text-center border-b-2'>
                    <h2 className=''>{new Date(frontMatter.date).toLocaleDateString()}</h2>
                    <h1 className='text-6xl'>{frontMatter.title}</h1>    
                </div>
                
                <article>
                    
                    <div>
                        <MdxComponent source={mdxSource} />
                    </div>
                </article>
            </div>
        </>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const slug : string = (context.params!.slug as string).replaceAll('-', ' ');
        const post = await getFileBySlug({slug});
        
        return {
            props: { post }
        };
    } catch (err) {
        console.error(err);
        return {
            props: {},
            notFound: true,
        };
    }
}

export async function getStaticPaths(staticPaths: GetStaticPaths) {
    try {
        const posts = fs.readdirSync('public/posts/').map(file => file.split('.')[0]);

        const paths = posts.map((filename) => ({
            params: { slug: filename.replace('.mdx', '') },
        }));
        return { paths, fallback: 'blocking' };
    } catch (err) {
        console.error(err);
    }
}
