import { socialLinksProps } from "@/typings";
import Container from "./Container";
import useAssets from "@/lib/customHooks/useAssets";
import FlexLayout from "./FlexLayout";
import Search from "../_shared/Search";
import Link from "next/link";
import { inter } from "@/lib/utils/font";
import SocialIcon from "../_shared/SocialIcon";
import { it } from "node:test";

interface linksProps {
  socialLinks: socialLinksProps[];
}
const Navbar = ({ socialLinks }: linksProps) => {
  const assets = useAssets();
  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <Container>
        <FlexLayout className="justify-between items-center">
          {/* <Search /> */}
          <Link
            href={"/"}
            className={`${inter.className} font-black text-slate-400 hover:text-slate-600`}
          >
            Blogr Template
          </Link>
          <div className="flex gap-2 justify-center">
            {socialLinks.map((item, index) => (
              <SocialIcon
                key={index}
                social={item.selectedLink}
                size={18}
                link={item.url}
              />
            ))}
          </div>
        </FlexLayout>
        {/* {socialLinks.map((link, index) => (
          <div key={index}>{assets.social[link.selectedLink]}</div>
        ))} */}
      </Container>
    </nav>
  );
};

export default Navbar;
