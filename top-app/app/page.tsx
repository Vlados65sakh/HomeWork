'use client';

import {Card, Like_Changed} from "@/components";
import styles from "./page.module.css";
import {motion, useReducedMotion, Variants} from "framer-motion";

// Контейнер: анимация инициируется при монтировании
const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.06,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 300 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function HomePage() {
    const shouldReduceMotion = useReducedMotion();
    const cards = [{}, {}, {}]; // твои данные

    return (
            <motion.section
                className={styles.wrapper}
                variants={shouldReduceMotion ? undefined : containerVariants}
                initial={shouldReduceMotion ? undefined : 'hidden'}
                animate={shouldReduceMotion ? undefined : 'show'}
            >
                {cards.map((_, idx) => (
                    <Card key={idx} variants={shouldReduceMotion ? undefined : itemVariants} className={styles.card} />
                ))}
                    <Like_Changed isActive={false} />
            </motion.section>
    );
}

