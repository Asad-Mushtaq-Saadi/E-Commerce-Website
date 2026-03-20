import React from 'react';
import styles from './CheckoutSection.module.css';

const CheckoutSection = () => {
  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutCard}>
        {/* Contact */}
        <h1>Contact</h1>
        <h2>Email or mobile phone number</h2>
        <span className={styles.emailDisplay}>usagerehunt@example.com</span>

        {/* Delivery */}
        <h2>Delivery</h2>
        <div className={styles.bulletItem}>- <strong>Ship</strong></div>
        <div className={styles.shipDetail}>
          <div className={styles.bulletItem}>- Country/Region: Pakistan</div>
          <div className={styles.bulletItem}>- Pick up: [Pick up]</div>
        </div>

        {/* Total */}
        <h2>Total</h2>
        <div className={styles.totalRow}>
          <span>Total</span>
          <span className={styles.totalAmount}>Rs. 4,950.00</span>
        </div>

        <hr />

        {/* Payment */}
        <h2>Payment</h2>
        <p className={styles.secureNote}>All transactions are secure and encrypted.</p>

        <h3>Cash on Delivery (COD)</h3>
        <p>You can place an order with "Cash On Delivery" payment method!</p>

        <h3>Bank Deposit</h3>
        <div className={styles.bankDepositBox}>[Bank Deposit]</div>

        <hr />

        {/* Billing address */}
        <h2>Billing address</h2>
        <div className={styles.addressLine}>- Country/Region: Pakistan</div>
        <div className={styles.addressLine}>- City: Lahore</div>
        <div className={styles.addressLine}>- Postal Code: 54000</div>
        <div className={styles.addressLine}>- Address: House no. 1, Block no. 12, Jahan Road, Main Campus</div>
        <div className={styles.addressLine}>- Payment Method: COD</div>

        <hr />

        {/* Submit Certificate */}
        <h2>Submit Certificate</h2>
        <div className={styles.fileInputWrapper}>
          <label>Upload a certificate here:</label>
          <input type="file" />
        </div>

        <hr />

        {/* Apply & Submit buttons */}
        <div className={styles.buttonGroup}>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Apply</button>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;