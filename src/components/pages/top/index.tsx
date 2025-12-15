import styles from './top.module.scss'
import WorkImage from '../../../assets/working_picture.png'
import {
  CursorTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  StorefrontIcon,
  WrenchIcon,
} from '@phosphor-icons/react'

const TopPage: React.FC = () => {
  const handleSubmitContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const body = `お名前: ${name}\nメールアドレス: ${email}\n\nお問い合わせ内容:\n${message}`
    const mailtoLink = `mailto:reform@kazariya.tokyo?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstView}>
        <div className={styles.catchphraseWrapper}>
          <h2 className={styles.catchphraseTitle}>
            アクセサリーの時間を
            <br />
            巻き戻してはみませんか。
          </h2>
          <p className={styles.catchphrase}>
            壊れてしまったアクセサリーも、サイズアウトしたジュエリーも、思い出と記憶は失われません。
            <br />
            もう一度輝きを取り戻し、新しいデザインで再び身につけてみませんか。
          </p>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img
          className={styles.image}
          src={WorkImage}
          alt="アクセサリー修理イメージ"
        />
      </div>

      <div className={styles.introductionSection}>
        <h3 className={styles.introductionTitle}>
          <StorefrontIcon size={32} weight="light" />
          飾りやについて
        </h3>
        <p className={styles.introductionText}>
          飾りやは、使わなくなったアクセサリーやジュエリーを新しいデザインに
          <br />
          生まれ変わらせるリフォーム・リメイク専門店です。
        </p>
      </div>

      <div className={styles.servicesSection}>
        <div>
          <h3>
            <WrenchIcon size={32} weight="light" />
            修理について
          </h3>
          <p>
            シルバーアクセサリーを軸に、各種貴金属製品の修理を承っております。
          </p>
        </div>
        <ul className={styles.servicesList}>
          <li>
            金・銀・プラチナ　その他素材のアクセサリー・ジュエリーのリペア・リフォームを承ります。
          </li>
          <li>
            ビーズアクセサリーやメッキ物アクセサリーの修理、メッキのかけ直し
          </li>
          <li>シルバー製品の磨きなおし・キズ取り</li>
          <li>イヤリングからピアスの加工（逆もできます）</li>
          <li>石が取れてしまった時の石入れ等</li>
        </ul>
        <p className={styles.servicesNote}>
          ※商品や素材によってはお受け出来ない場合がございます。見積相談はお気軽にお声掛けくださいませ。
        </p>
      </div>

      <div className={styles.nameMeaningSection}>
        <h3>
          <CursorTextIcon size={32} weight="light" />
          「飾りや」という名前について
        </h3>
        <p className={styles.nameMeaningText}>
          単なる装飾品ではなく、お客様の「心」や「人生」を彩る大切な一部を扱っているという想いを込めました。
          <br />
          壊れたものを直すことは、止まった時間を動かし、想い出を未来へ繋ぐこと。
          <br />
          「飾り」を通じて、お客様の日々が再び輝き出すお手伝いをしたい。
          <br />
          そんな職人としての願いを、飾らない「飾りや」という名に託しています。
        </p>
      </div>

      <div className={styles.shopInfoContainer}>
        <div className={styles.addressSection}>
          <h3>
            <MapPinIcon size={32} weight="light" />
            住所・アクセス
          </h3>
          <p className={styles.addressText}>
            〒150-0042 東京都渋谷区宇田川町１２−１８ ハンズ渋谷店 6F Aフロア
            <br />
            <br />
            アクセス：渋谷駅から徒歩数分。JR線・地下鉄各線をご利用ください。
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.607788631782!2d139.69316829678954!3d35.6620337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca916447249%3A0x13ff108bf95bcbf1!2z44OP44Oz44K65riL6LC35bqX!5e0!3m2!1sja!2sjp!4v1765817454134!5m2!1sja!2sjp" width="100%" height="360" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            }}
          />
        </div>

        <div className={styles.contactSection}>
          <h3>
            <EnvelopeIcon size={32} weight="light" />
            お問い合わせ
          </h3>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmitContactForm}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="例: 山田太郎"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="例: example@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">件名</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="例: 修理のお見積り依頼"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="例: 壊れたネックレスの修理をお願いしたいです。詳細は以下の通りです。"
              ></textarea>
            </div>
            <button className={styles.submitButton} type="submit">
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default TopPage
