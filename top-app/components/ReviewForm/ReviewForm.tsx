'use client';

import {JSX} from "react";
import styles from './ReviewForm.module.css';
import cn from "classnames";
import {Button, Input, Textarea} from "@/components";
import {useForm} from "react-hook-form";
import {IReviewForm} from "@/components/ReviewForm/ReviewForm.interface";

export const ReviewForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<IReviewForm>();

    const onSubmit = async () => {
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm)}
            >
                <Input
                    {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                    placeholder={'Имя'}
                    error={errors.name}
                />
                <Textarea {...register('description', {required: {value: true, message: 'Заполните комментарий'}})}
                          placeholder={'Комментарий'}
                          className={styles.description}
                          error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance={'black'}>Отправить</Button>
                </div>
            </div>
        </form>
    );
};