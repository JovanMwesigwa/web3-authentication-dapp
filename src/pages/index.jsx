import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ConnectWallet from './components/ConnectWallet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3 Auth</title>
        <meta name="description" content="Created for Celo Sage tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Connect on Celo Alajores </p>
          <div>
            <a
              href="https://celo.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <h1 className="text-2xl font-semibold">CELO</h1>
            </a>
          </div>
        </div>

        {/* Connect to login button */}
        <ConnectWallet />

        <div className={styles.grid}>
          <a
            href="https://docs.celo.org/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Celo Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about celo from the documentation
            </p>
          </a>

          <a
            href="https://docs.celo.org/tutorials"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tutorials <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get started with the Celo tutorials
            </p>
          </a>

          <a
            href="https://docs.celo.org/showcase"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Scafforld and show off your new projects everywhere 😀
            </p>
          </a>

          <a
            href="https://discord.com/invite/atBpDfqQqX"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Connect <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Join the amazing Celo community on Discord
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
