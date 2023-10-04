
import FrontMatter from '@/interfaces/FrontMatter';
import Link from 'next/link';
import { useState, Fragment } from 'react';


export function BlogCard(matter: FrontMatter){
    
    const [hovered, onHover] = useState<boolean>(false);
    const readableTitle = matter.title.replaceAll(' ', '-');

    return <Fragment key={matter.id}>
        <li >
            <Link href={`/blog/${readableTitle}`} className='flex flex-row items-center py-8 border-b cursor-default sm:py-4' onMouseEnter={() => { onHover(true) }} onMouseLeave={() => { onHover(false) }} >
                <div className="flex flex-col justify-center ml-3 grow">
                    <Tags tags={matter.tags}/> 
                    <div className={`cursor-pointer text-4xl sm:text-2xl font-bold mb-4 sm:mb-2 transition-all duration-300 ${hovered ? 'text-orange-400' : 'text-indigo-500 '}`}>{matter.title}</div> 
                    <p className='mb-1 text-xl font-thin sm:text-base line-clamp-3 sm:line-clamp-2'>{matter.summary}</p>
                    
                    <div className='flex-row items-baseline'>
                        <span className='text-base sm:text-sm'>{new Date(matter.date).toLocaleDateString()}</span>
                        <span className='ml-1 mr-2 text-sm sm:text-xs font-[220]'>{matter.time}</span>
                    </div> 

                </div>
                <img src={matter.thumbnail} alt={`${matter.title} thumbnail`} className={`${matter.thumbnail === undefined ? 'hidden' : ''} ml-8 md:hidden sm:hidden transition-transform rounded-lg ml-1 object-cover lg:h-40 lg:w-44 hover:scale-105 hover:shadow-lg block`} />
            </Link>
            
        </li>
    </Fragment>
}


function Tags({tags}:{tags: string[]}){   
    return <div className='grow'>
        { tags.map((tag) => <span key={tag} className='mr-2 text-base sm:text-sm'>#{tag}</span>) }
    </div>
}