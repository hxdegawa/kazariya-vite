import styles from './header.module.scss'
import OriginalLogo from '../../../assets/kazariya_original_logo.png'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerItemWrapper}>
      <img
        className={styles.logo}
        src={OriginalLogo}
        alt="Kazariya Original Logo"
      />
    </div>
  </header>
)

export default Header
