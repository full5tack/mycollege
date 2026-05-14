import { IndianRupee, Wallet, Coins, Info, Wand2, Crown, Percent } from 'lucide-react';
import styles from './FeeStructure.module.scss';

const FeeStructure = () => {
  const emiPlans = [
    { months: "6 Months", amount: "₹37,500/mo", active: true },
    { months: "12 Months", amount: "₹21,000/mo", active: false },
    { months: "18 Months", amount: "₹17,500/mo", active: false },
    { months: "24 Months", amount: "₹11,000/mo", active: false },
  ];

  return (
    <section id="fee-details" className={styles.feeSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Updated Amity Online MBA Fee 2026</h2>
          <p>
            The Amity Online MBA fee structure helps learners to access quality higher education
            that meets the academic standards at a lower price in a flexible manner.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.cardsRow}>
              {/* Total Program Fee Card */}
              <div className={styles.feeCard}>
                <div className={styles.feeCardInner}>
                  <div className={styles.feeIcon}>
                    <Wallet size={32} color="#facc15" fill="#facc15" />
                  </div>
                  <div className={styles.feeAmount}>₹ 2,25,000</div>
                  <div className={styles.feeLabel}>Total Program Fee</div>
                  <div className={styles.feeNote}>
                    <Info size={14} className={styles.infoIcon} /> May vary by specialization
                  </div>
                </div>
              </div>

              {/* Per Semester Fee Card */}
              <div className={styles.semesterCard}>
                <div className={styles.semesterInner}>
                  <div className={styles.feeIcon}>
                    <Coins size={32} color="#f59e0b" fill="#f59e0b" />
                  </div>
                  <div className={styles.semAmount}>₹ 56,300</div>
                  <div className={styles.semLabel}>Per Semester Fee</div>
                  <div className={styles.semNote}>
                    <Info size={14} className={styles.infoIcon} /> 4 Semester total
                  </div>
                </div>
              </div>
            </div>

            {/* No-Cost EMI Banner */}
            <div className={styles.emiBanner}>
              <h3><span className={styles.percent}><Percent size={20} /></span> No-Cost EMI Available</h3>
              <p>
                Pay your Amity Online MBA fee easily with 0% interest - a convenient way to
                invest in your career.
              </p>
            </div>
          </div>

          {/* Right Column: EMI Calculator Card */}
          <div className={styles.rightCol}>
            <div className={styles.emiCard}>
              <div className={styles.emiHeader}>
                <Wand2 size={20} className={styles.wandIcon} />
                <span>EMI Calculator</span>
              </div>
              <div className={styles.emiInnerBox}>
                <div className={styles.emiList}>
                  {emiPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`${styles.emiRow} ${!plan.active ? styles.emiBlurred : ''}`}
                    >
                      <span className={styles.emiMonths}>{plan.months}</span>
                      <span className={styles.emiAmount}>{plan.amount}</span>
                    </div>
                  ))}
                  <div className={styles.unlockOverlay}>
                    <button suppressHydrationWarning className={styles.btnUnlock}>
                      <Crown size={18} fill="currentColor" /> Unlock Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
