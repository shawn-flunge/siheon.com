

export default interface FrontMatter {
    id: number,
    title: string,
    summary: string,
    thumbnail?: string,
    date: string,
    tags: string[],
    time: string,
}