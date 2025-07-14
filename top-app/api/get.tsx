import { API } from '@/app/api';
import {GetItem} from "@/interfaces/get.interface";

export async function getPosts(): Promise<GetItem> {
	const res = await fetch(API.posts);
	return res.json();
}