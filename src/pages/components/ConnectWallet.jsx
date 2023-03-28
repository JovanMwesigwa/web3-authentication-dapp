import { useWeb3React } from '@web3-react/core'
import styles from '@/styles/Home.module.css'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useEffect } from 'react'

const ConnectWallet = ({ isConnected, setIsConnected }) => {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [44787],
  })

  // Extract the current chains info from useWeb3React hook
  const { activate, active } = useWeb3React()

  const onClick = () => {
    activate(injectedConnector)
  }

  useEffect(() => {
    setIsConnected(active)
  }, [active])

  return (
    <>
      {isConnected ? (
        <button className={styles.center}>
          <div className={styles.thirteen}>
            <h1 className="text-lg font-medium">Connected</h1>
          </div>
        </button>
      ) : (
        <button onClick={onClick} className={styles.center}>
          <div className={styles.thirteen}>
            <h1 className="text-lg font-medium">Login with wallet</h1>
          </div>
        </button>
      )}
    </>
  )
}

export default ConnectWallet
