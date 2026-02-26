import React from 'react'
import ChoosesUsCard from '../ChoosesUsCard/ChoosesUsCard'
import Styles from './WhyChoosesUs.module.css'
import Container from '../../Building Blocks/Container/Container'

// Icons
import { GrDeliver } from "react-icons/gr";
import { FaUndoAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import SectionHeading from '../../Building Blocks/SectionHeadings/SectionHeading';

const WhyChoosesUs = () => {
  return (
    <div className={Styles.wCUParent}>
        <SectionHeading subHeading="OUR UNIQUENESS" heading="Why Shop With Us" />
      <Container>
        <div className={Styles.wCUContent}>

          <ChoosesUsCard
            icon={GrDeliver}
            smallHeading="Free Deliveries"
            bigHeading="Across Pakistan"
            detail="We provide fast and secure delivery services to all major cities in Pakistan with reliable tracking support."
          />

          <ChoosesUsCard
            icon={FaUndoAlt}
            smallHeading="Easy Returns"
            bigHeading="1 Year Warranty"
            detail="Enjoy hassle-free returns and official one-year warranty coverage on all smart devices."
          />

          <ChoosesUsCard
            icon={MdSupportAgent}
            smallHeading="Support Squad"
            bigHeading="Smart Help, 24/7"
            detail="Our dedicated support team is available around the clock to assist you with any queries."
          />

        </div>
      </Container>
    </div>
  )
}

export default WhyChoosesUs