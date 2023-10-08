'use client'
import Image from 'next/image';

import Header from './components/Header';
import Modal from './components/Modal';
import { useState, useEffect } from "react";
import LandingPage from './landing/LandingPage';
import LandingBorder from './landingBorder/LandingBorder';
import Contract from './contract/Contract';
import BorderComponent from './borderComponent/BorderComponent';
import Ecosystem from './ecosystem/Ecosystem';
import RewardToken from './reward/RewardToken';
import Tokenomics from './tokenomics/Tokenomics';
import Roadmap from './roadmap/Roadmap';
import Social from './socials/Social';
import FooterBorder from './footerborder/FooterBorder';
import Footer from './footer/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    if (openPrivacy) {
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false);
    }
  }, [openPrivacy]);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      // Disable scrolling when the modal is open
      body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      body.style.overflow = "auto";
    }

    // Cleanup: Reset the overflow style when the component unmounts
    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleToggleModal = () => {
    setOpenPrivacy(!openPrivacy); // Toggle the privacy state
  };

  return (
    <>
      <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
      <Header setOpenPrivacy={setOpenPrivacy} handleToggleModal={handleToggleModal}>
      </Header>
      <LandingPage></LandingPage>
      <LandingBorder></LandingBorder>
      <Contract></Contract>
      <BorderComponent></BorderComponent>
      <Ecosystem></Ecosystem>
      <BorderComponent></BorderComponent>
      <RewardToken></RewardToken>
      <BorderComponent></BorderComponent>
      <Tokenomics></Tokenomics>
      <BorderComponent></BorderComponent>
      <Roadmap></Roadmap>
      <BorderComponent></BorderComponent>
      <Social></Social>
      <FooterBorder></FooterBorder>
      <Footer></Footer>
    </>
  );
}
