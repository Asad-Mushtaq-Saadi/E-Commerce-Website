import React from "react";
import styles from "./TermsAndConditionsSection.module.css";
import Container from "../Building Blocks/Container/Container";

const TermsAndConditionsSection = () => {
  return (
    <div className={styles.termsAndConditionsSection}>
      <Container>
        <div className={styles.container}>
          
          <h1 className={styles.mainHeading}>Terms & Conditions</h1>

          <p className={styles.intro}>
            Welcome to our website. By accessing and using our services, you
            agree to comply with and be bound by the following terms and
            conditions. Please read these terms carefully before using our
            website. If you do not agree with any part of these terms, you
            should discontinue use of our services immediately.
          </p>

          <h2 className={styles.subHeading}>Use of Our Website</h2>
          <p className={styles.paragraph}>
            You agree to use our website only for lawful purposes and in a way
            that does not infringe upon the rights of others or restrict their
            use of the platform. Unauthorized use, including attempting to gain
            access to restricted areas, distributing harmful content, or
            engaging in fraudulent activities, is strictly prohibited. We
            reserve the right to suspend or terminate access if misuse is
            detected.
          </p>

          <h2 className={styles.subHeading}>Intellectual Property</h2>
          <p className={styles.paragraph}>
            All content available on this website, including text, graphics,
            logos, images, and software, is the property of our organization
            and is protected by applicable copyright and intellectual property
            laws. You may not reproduce, distribute, or modify any content
            without prior written permission from us.
          </p>

          <h2 className={styles.subHeading}>Limitation of Liability</h2>
          <p className={styles.paragraph}>
            We strive to ensure that all information on our website is
            accurate and up to date; however, we do not guarantee the
            completeness or reliability of any content. We shall not be held
            responsible for any direct, indirect, or incidental damages
            resulting from the use or inability to use our website or services.
          </p>

          <h2 className={styles.subHeading}>Changes to Terms</h2>
          <p className={styles.paragraph}>
            We reserve the right to update or modify these terms and conditions
            at any time without prior notice. Continued use of our website
            after changes are made constitutes your acceptance of the updated
            terms. We encourage users to review this page periodically to stay
            informed of any updates.
          </p>

        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditionsSection;