import styles from './footer.module.scss'
import Logo from '../../../assets/kazariya_original_logo.png'

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerText}>
      <p>
        アクセス
        <br />
        〒150-0042 東京都渋谷区宇田川町１２−１８ ハンズ渋谷店 6F Aフロア
      </p>
      <p>
        お電話
        <br />
        <a href="tel:0337808626">03-3780-8626</a>
      </p>
      <p>© 2025 飾りや. All rights reserved.</p>
    </div>

    <img className={styles.logo} src={Logo} alt="飾りや ロゴ" />
  </footer>
)

export default Footer
