import React from "react";
import styles from "./PrivacyPolicySection.module.css";
import Container from "../Building Blocks/Container/Container";

const PrivacyPolicySection = () => {
  return (
    <div className={styles.privacySection}>
      <Container>
        <div className={styles.container}>
          
          <h1 className={styles.mainHeading}>Privacy Policy</h1>

          <p className={styles.intro}>
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you
            visit our website or use our services. By accessing our platform,
            you agree to the practices described in this policy.
          </p>

          <h2 className={styles.subHeading}>Information We Collect</h2>
          <p className={styles.paragraph}>
            We may collect personal information such as your name, email
            address, contact details, and any other information you voluntarily
            provide when interacting with our website. Additionally, we may
            collect non-personal data such as browser type, device information,
            IP address, and usage statistics to improve our services and user
            experience.
          </p>

          <h2 className={styles.subHeading}>How We Use Your Information</h2>
          <p className={styles.paragraph}>
            The information we collect is used to provide, operate, and improve
            our services. This may include responding to inquiries, processing
            transactions, sending updates, enhancing website functionality, and
            ensuring security. We use your data responsibly and only for
            legitimate business purposes.
          </p>

          <h2 className={styles.subHeading}>Data Protection & Security</h2>
          <p className={styles.paragraph}>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. While we strive to use
            commercially acceptable means to safeguard your data, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className={styles.subHeading}>Third-Party Services</h2>
          <p className={styles.paragraph}>
            We may use third-party services to support our operations, such as
            analytics or payment processing providers. These third parties may
            have access to certain information solely for performing specific
            tasks on our behalf and are obligated not to disclose or use it for
            any other purpose.
          </p>

          <h2 className={styles.subHeading}>Changes to This Policy</h2>
          <p className={styles.paragraph}>
            We reserve the right to update or revise this Privacy Policy at any
            time. Any changes will be posted on this page with an updated
            revision date. Continued use of our website after changes are made
            indicates your acceptance of the updated policy.
          </p>

        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicySection;