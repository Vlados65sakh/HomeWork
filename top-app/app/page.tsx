'use client';

import {Button, Htag, P, Tag} from "@/components";
import React, {useState} from "react";


// export const metadata = {
//   title: "Главная страница",
//   description: "Описание страницы"
// };

export default function Home() {
    const [counter, setCounter] = useState<number>(0);
  return (
            <div>
            <Htag tag={'h1'}>{counter}</Htag>
            <Button appearance={"primary"} arrow={'right'} onClick={() => setCounter(x => x+1)}>Кнопка</Button>
            <Button appearance={"ghost"} arrow={'down'}>Кнопка</Button>
            <P size={'l'}>Большой</P>
            <P>Средний</P>
            <P size={'s'}>Маленький</P>
                <Tag size={'s'}>Ghost</Tag>
                <Tag size={'m'} color={"red"}>Red</Tag>
                <Tag size={'s'} color={"green"}>Green</Tag>
                <Tag color={'primary'} >Green</Tag>
          </div>
         );
}
