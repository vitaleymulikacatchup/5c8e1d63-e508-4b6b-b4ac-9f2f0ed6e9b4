"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "FAQ", id: "faq" }, { name: "Footer", id: "footer" }]}
          logoSrc="/images/logo.svg"
          logoAlt="MemCoin X Logo"
          className="sticky"
        />
      </div>
      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to MemCoin X"
          description="Join the playful and vibrant memecoin community!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="Discover the features and values that set our memecoin apart from the rest!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Explore our token distribution and economic model to support growth."
          kpiItems={[
            { value: "10M", description: "Total Supply", longDescription: "Total supply of tokens in circulation.", icon: { /* Replace with appropriate icon */ } }
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <ImageFAQ
          items={[
            { title: "What is MemCoin X?", content: "MemCoin X is a playful cryptocurrency aiming to bring fun to finance!" },
            { title: "How can I buy MemCoin X?", content: "You can buy MemCoin X through various exchanges or directly through our platform!" },
            { title: "Is there a community?", content: "Yes! Join our community through our social media platforms to stay updated!" },
            { title: "What are the utilities of MemCoin X?", content: "MemCoin X can be used for trading, staking, and participating in exclusive events!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoAlt="MemCoin X Logo"
          columns={[
            { title: "Links", items: [
              { label: "About", onClick: () => {} },
              { label: "How to Buy", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} }
            ] },
            { title: "Support", items: [
              { label: "FAQ", onClick: () => {} },
              { label: "Contact Us", onClick: () => {} }
            ] },
            { title: "Community", items: [
              { label: "Twitter", onClick: () => {} },
              { label: "Discord", onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2023 MemCoin X"
          onPrivacyClick={() => {}} 
        />
      </div>
    </SiteThemeProvider>
  );
}