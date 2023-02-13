import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { RevealWrapper } from 'next-reveal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textState, charCountState } from '@/atoms/text.atom'
import styled from '@emotion/styled'

const inter = Inter({ subsets: ['latin'] })

const TextInput = styled('div')`
  background-color: 'black',
  background: 'black',
  height: '130px'
`

export default function Home() {
  const [text, setText] = useRecoilState(textState)
  const count = useRecoilValue(charCountState)

  const onChange = (event: any) => {
    setText(event.target.value);
  };


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
          </p>
        </div>

        <RevealWrapper rotate={{ x: 12, y: 40, z: 0 }} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
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
