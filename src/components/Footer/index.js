import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>COMPANY</FooterLinkTitle>
                <FooterLink
                  href="https://www.datastax.com/company"
                  target="_blank"
                >
                  About Us
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/company/events"
                  target="_blank"
                >
                  Events
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/careers"
                  target="_blank"
                >
                  Careers
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/brand-resources"
                  target="_blank"
                >
                  Brand Resources
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/contact-us"
                  target="_blank"
                >
                  Contact Us
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>MOST POPULAR</FooterLinkTitle>
                <FooterLink
                  href="https://astra.datastax.com/registerr"
                  target="_blank"
                >
                  Sign Up a Cluster
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/try-it-out"
                  target="_blank"
                >
                  Your First Cassandra Query
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/cassandra-workshop-series"
                  target="_blank"
                >
                  Workshops
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/dev/certifications"
                  target="_blank"
                >
                  Get Certified
                </FooterLink>
                <FooterLink
                  href="https://docs.astra.datastax.com/docs/sample-apps"
                  target="_blank"
                >
                  Sample Apps
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>GET HELP</FooterLinkTitle>
                <FooterLink
                  href="https://docs.datastax.com/en/landing_page/doc/landing_page/current.html"
                  target="_blank"
                >
                  Docs
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/services/support"
                  target="_blank"
                >
                  Support
                </FooterLink>
                <FooterLink
                  href="https://auth.cloud.datastax.com/auth/realms/CloudUsers/protocol/saml/clients/absorb"
                  target="_blank"
                >
                  Academy
                </FooterLink>
                <FooterLink
                  href="https://community.datastax.com/index.html"
                  target="_blank"
                >
                  Community
                </FooterLink>
                <FooterLink
                  href="https://downloads.datastax.com/#astra"
                  target="_blank"
                >
                  Tools & Downloads
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>RESOURCES</FooterLinkTitle>
                <FooterLink
                  href="https://www.datastax.com/blog"
                  target="_blank"
                >
                  Blog
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/resources?type=podcast"
                  target="_blank"
                >
                  Podcasts
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/resources?type=webinar"
                  target="_blank"
                >
                  Webinars
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/cassandra"
                  target="_blank"
                >
                  Cassandra
                </FooterLink>
                <FooterLink
                  href="https://www.datastax.com/resources"
                  target="_blank"
                >
                  Resource Library
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                DataStax
              </SocialLogo>
              <WebsiteRights>
                DataStax © {new Date().getFullYear()} | Privacy Policy | Terms
                of Use | Cookies Settings
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/datastax"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.github.com/datastax/"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.twitter.com/datastax"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.linkedin.com/company/datastax/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
