
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';



export default function MdxComponent({source} : {source: string}){

    const MDXLayout = useMemo(() => getMDXComponent(source), [source])
    return (
        <div className="pt-10 pb-8 prose max-w-none dark:prose-dark">
            <MDXLayout />    
        </div>
        
    )
}