import styles from "./WalletSelect.module.css";

const WalletSelect = () => {
  return (
    <div className={styles.walletSelect}>
      <img
        className={styles.sodeadCastleIcon}
        alt=""
        src="/sodeadCastle@1x.jpg"
      />
      <img className={styles.sodeadLogoIcon} alt="" src="/sodeadLogo@2x.png" />
      <button className={styles.connectWalletButton}>
        <button className={styles.connectWallet} autoFocus id="connectWallet" />
        <label className={styles.connectWallet1} id="connectWallet">
          Connect Wallet
        </label>
        <img
          className={styles.wallet1Icon}
          alt=""
          src="/Wallet Placeholder@2x.png"
        />
      </button>
    </div>
  );
};

export default WalletSelect;
