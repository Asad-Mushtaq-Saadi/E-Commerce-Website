import React from 'react'
import Styles from './ChoosesUsCard.module.css'
import Headings from '../../Building Blocks/SectionHeadings/SmallHeading'

const ChoosesUsCard = ({ icon: Icon, smallHeading, bigHeading, detail }) => {
  return (
    <div className={Styles.cUcardParent}>
      <div className={Styles.cUcardContent}>

        {/* Dynamic Icon */}
        <Icon className={Styles.cUcardIcon} />

        <div className={Styles.cUcardDetails}>
          <Headings
            subHeading={smallHeading}
            heading={bigHeading}
          />
          <p className={Styles.cUCardPara}>{detail}</p>
        </div>

      </div>
    </div>
  )
}

export default ChoosesUsCard