import {getPosts} from "@/api/get";


export default async function getData() {
    const posts = await getPosts();
    return (
        <main>
            <div>{JSON.stringify(posts)}</div>
        </main>
    );
}