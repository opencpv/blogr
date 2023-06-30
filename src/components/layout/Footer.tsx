import Link from "next/link";
import FlexLayout from "./FlexLayout";
import { socialLinksProps } from "@/typings";
import SocialIcon from "../_shared/SocialIcon";
import Container from "./Container";
import { inter } from "@/lib/utils/font";

interface linksProps {
  socialLinks: socialLinksProps[];
}

const Footer = ({ socialLinks }: linksProps) => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="flex gap-2 justify-center mb-2 mt-8 ">
          {socialLinks.map((item, index) => (
            <SocialIcon
              key={index}
              social={item.selectedLink}
              size={18}
              link={item.url}
            />
          ))}
        </div>
      </Container>
      <p className={`${inter.className} text-center text-[12px] text-[#888]`}>
        Copyright ©2023 All rights reserved | Blogr Template
      </p>
      <FlexLayout className="gap-2 justify-center  mb-20  text-center text-sm text-[#888]">
        <Link
          href={"/"}
          className={`hover:underline ${inter.className} text-[12px]`}
        >
          Terms & Conditions
        </Link>
        <Link
          href={"/"}
          className={`hover:underline ${inter.className} text-[12px]`}
        >
          Privacy Policy
        </Link>
      </FlexLayout>
    </footer>
  );
};

export default Footer;
