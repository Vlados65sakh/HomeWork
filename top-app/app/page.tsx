'use client';

import {Card, Like_Changed} from "@/components";
import styles from "./page.module.css";



export default function Home() {
    return (
        <div className={styles.wrapper}>
                <Card className={styles.card}/>
                <Card className={styles.card}/>
                <Card className={styles.card}/>
                <Like_Changed isActive={false} />

         </div>
    );
}

