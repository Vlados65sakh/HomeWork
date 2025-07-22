
import {notFound} from "next/navigation";
import {cache} from "react";
import {getPostId} from "@/api/get";

interface AliasParams { alias: string }
type Props = { params: Promise<AliasParams> };

const cachedGetPage = cache(getPostId);


export default async function GetPageById({ params }: Props) {
    const { alias } = await params;
    const page = await cachedGetPage(alias);

    if (!page) {
        notFound();
    }
    return (
        <div>
            <h1>{page.userId}</h1>
            <h1>{page.title}</h1>
            <h1>{page.body}</h1>
        </div>
    );
}

