import { BlogCard } from "@/components/card";
import { getFrontmatters } from "@/components/mdx"
import FrontMatter from "@/interfaces/FrontMatter"

export default function Home2({ latest }: { latest: FrontMatter[] }){

    return <div className="container px-2 pt-32 mx-auto">
        <div className="text-3xl font-medium">
            Latest Posts
        </div>
        <ul className="container mx-auto">
            { latest.map((matter) => BlogCard(matter)) }
        </ul>
    </div>
}

export async function getStaticProps() {
    
    const matters =  getFrontmatters();
    matters.sort((a, b) => a.id-b.id);
    // todo : 블로그 글 많아지면 length -3 으로 고정
    const start = matters.length > 3 ? matters.length-3 : 0;
    const latest = matters.slice(start);

    return {
        props: { latest },
    }
}
