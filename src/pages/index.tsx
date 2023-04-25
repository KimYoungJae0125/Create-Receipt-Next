import HeadComponent from '@/components/head'
import ButtonComponent from '@/components/button'
import BarHoppingComponent from '@/components/barhopping'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const inter = Inter({ subsets: ['latin'] })

type braHoopingType = {
  title:string
  date:Date
  participation:string
  notParticipation:string
}

export default function Home() {
  let [roundSize, setRoundSize] = useState(1);
  const { handleSubmit } = useForm<braHoopingType>();
  const roundList = () => {
    const roundListInfo = [];
    for(let i=0; i<roundSize; i++) {
      roundListInfo.push(<BarHoppingComponent key={i} />);
    }
    return roundListInfo;
  }
  const getData = (data:braHoopingType) => {
    console.log(data)
  }
  const increaseRound = () => {
    setRoundSize(roundSize + 1);
  }
  return (
    <>
      <HeadComponent title="영수증 만들기"  />
      <main className={styles.main}>
        <h1>영수증 만들기</h1>
        <br />

        <ButtonComponent onClick={increaseRound} text="차수 추가" />
        <form onSubmit={handleSubmit(getData)}>
          {roundList()}
          <br />
          <ButtonComponent type="submit" text="생성" />            
        </form>
      </main>
    </>
  )
}
