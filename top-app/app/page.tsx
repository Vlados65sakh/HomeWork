'use client';

import {Card, Like_Changed} from "@/components";




export default function Home() {
    return (
        <div>
            <div style={{ display: 'flex'}}>
                <Card />
                <Like_Changed isActive={false} />
            </div>

        </div>
    );
}

