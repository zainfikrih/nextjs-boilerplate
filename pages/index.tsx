import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { RevealWrapper } from 'next-reveal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textState, charCountState } from '@/atoms/text.atom'
import styled from '@emotion/styled'
import useSWR, { useSWRConfig } from 'swr'
import { Button, Image, Img, Spinner, useToast } from '@chakra-ui/react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { fetcher, mutate } = useSWRConfig()
  const { data, error, isLoading } = useSWR('https://dummyjson.com/products/1')
  const [add, setAdd] = useState({
    title: 'Nissan Silvia'
  })

  const toast = useToast()

  const [text, setText] = useRecoilState(textState)
  const count = useRecoilValue(charCountState)

  const onChange = (event: any) => {
    setText(event.target.value);
    setAdd({ title: event.target.value })
  }

  const handleAdd = async () => {
    if (fetcher) await fetcher('https://dummyjson.com/products/add', add)
    mutate('https://dummyjson.com/products/1') // Update data after add
  }

  if (error) toast({
    title: error.message,
    status: 'error',
    isClosable: true,
  })

  if (data) {
    // handle success
  }

  if (isLoading) return (<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />)

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/index.tsx</code>
            </p>
          </RevealWrapper>
          <p>
            <input type="text" value={text} onChange={(e) => onChange(e)} />
            <br />
            Echo: {text}
            <br />
            <>Character Count: {count}</>
            <Button onClick={() => handleAdd()}>ADD</Button>
          </p>
        </div>

        <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src={`${data.images[0]}`}
              alt="Next.js Logo"
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
              />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Learn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Templates <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
              </p>
            </a>
          </div>
        </RevealWrapper>
      </main>
    </>
  )
}
