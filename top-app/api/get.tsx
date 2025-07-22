import {API} from '@/app/api';
import {GetItem} from "@/interfaces/get.interface";

export async function getPosts(): Promise<GetItem[]> {
    const res = await fetch(API.posts);
    return res.json();
}

export async function getPostId(alias: string): Promise<GetItem | null> {
    const res = await fetch(API.postsById + alias, {
        next: {revalidate: 10}
    });
    console.log('revalidating getPage');
    if (!res.ok) {
        return null;
    }

    return res.json();
}