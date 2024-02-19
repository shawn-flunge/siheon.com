import FrontMatter from "@/interfaces/FrontMatter"

import SvgButton from '../src/components/SvgButton';
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home2({ latest }: { latest: FrontMatter[] }){
    const router = useRouter();

    return <div className="container px-2 pt-32 mx-auto">
        <Head>
            <title>Hello, I'm Shawn</title>
        </Head>
        <div className="flex mb-6 text-4xl font-semibold place-content-center lg:text-5xl">
            Be interactive, Get creative.
        </div>

        <div className="mb-12 text-xl font-medium lg:text-2xl">
            3년차 Flutter 개발자 이시헌 혹은 Shawn 입니다. 사용자에게 신선한 경험을 주기 위해서, 스스로 쉽고 편하게 일하기 위해 끊임없이 고민합니다.
        </div>

        <div className="mb-4 text-2xl font-semibold lg:text-3xl">
            Projects
        </div>
        <div className="flex gap-5 px-2 mb-12">
            <div className="text-xl font-medium">
                Localify
            </div>
            <div className="">
                - Flutter 앱을 위한 다국어 문서 생성 툴<br/>
                - Google Spread Sheets, Notion Database에서 데이터를 불러와 json, arb파일 생성<br/>
                - Dart
            </div>
        </div>
        <div className="mb-4 text-2xl font-semibold lg:text-3xl">
            Socials
        </div>   
        <div className="flex items-center gap-5 px-2 mb-4">
            <div className="text-xl font-medium">
                <SvgButton path="/svg/blog.svg" onClick={() => {
                    router.push("/blog");
                }}/>
            </div>
            <div className="">
                주로 재밌는 UIUX를 가진 위젯을 구현해 보고 그 과정에 대해 기술한 글을 올립니다.
            </div>       
        </div>
        
        <div className="flex items-center gap-5 px-2 mb-4">
            <div className="text-xl font-medium">
                <SvgButton path="/svg/github.svg" onClick={() => {
                    window.open("https://github.com/shawn-flunge/");
                }}/>
            </div>
            <div className="">
                개인적으로 하는 모든 프로젝트는 오픈소스로 제 깃허브에서 찾을 수 있습니다.
            </div>       
        </div>
        
        <div className="flex items-center gap-5 px-2 mb-4">
            <div className="text-xl font-medium">
                <SvgButton path="/svg/x.svg" onClick={() => {
                    window.open("https://twitter.com/also_shawn");
                }}/>
            </div>
            <div className="">
                해외 커뮤니티의 동향을 살피고 그들에게 저를 소개하는 창구입니다.
            </div>       
        </div>
        <br/>
    </div>
}
