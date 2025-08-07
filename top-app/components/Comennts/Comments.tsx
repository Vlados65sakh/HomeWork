'use client';

import React, { useEffect, useState } from 'react';
import styles from "@/components/Post/Post.module.css";

type Comment = {
    email: string;
    name: string;
    body: string;
};

export const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            const data = await res.json();
            setComments(
                data.map((item: any) => ({
                    email: item.email,
                    name: item.name,
                    body: item.body,
                }))
            );
            setLoading(false);
        };
        fetchComments();
    }, []);

    if (loading) return <div>Загрузка...</div>;

    return (
        <div className={styles.TextUp}>
            <div className={styles.top}>
                Комментарии
            </div>
            <ul className={styles.text}>
                {comments.map((comment, idx) => (
                    <div key={idx} style={{ marginBottom: 16 }}>
                        <strong>{comment.name}</strong> (<em>{comment.email}</em>)
                        <div>{comment.body}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
};