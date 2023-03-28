import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const ConnectWallet = () => {
  return (
    <>
      <Link href="/store" className={styles.center}>
        <div className={styles.thirteen}>
          <h1 className="text-lg font-medium">Connect to login</h1>
        </div>
      </Link>
    </>
  )
}

export default ConnectWallet
