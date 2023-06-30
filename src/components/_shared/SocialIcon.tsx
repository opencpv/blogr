import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

interface socialLinks {
  social: string;
  size: number;
  link: string;
}

const SocialIcon = ({ social, size, link }: socialLinks) => {
  switch (social) {
    case "facebook":
      return (
        <Link
          href={link}
          className="bg-slate-400 hover:bg-slate-600 transition-all flex items-center justify-between p-1 rounded-full"
        >
          <FaFacebookF className="text-white" size={size} />
        </Link>
      );
    case "github":
      return (
        <Link
          href={link}
          className="bg-slate-400 hover:bg-slate-600 transition-all flex items-center justify-between p-1 rounded-full"
        >
          <FaGithub className="text-white" size={size} />
        </Link>
      );
    case "linkedin":
      return (
        <Link
          href={link}
          className="bg-slate-400 hover:bg-slate-600 transition-all flex items-center justify-between p-1 rounded-full"
        >
          <FaLinkedinIn className="text-white" size={size} />
        </Link>
      );
    case "youtube":
      return (
        <Link
          href={link}
          className="bg-slate-400 hover:bg-slate-600 transition-all flex items-center justify-between p-1 rounded-full"
        >
          <FaYoutube className="text-white" size={size} />
        </Link>
      );
    case "instagram":
      return (
        <Link
          href={link}
          className="bg-slate-400 hover:bg-slate-600 transition-all flex items-center justify-between p-1 rounded-full"
        >
          <FaInstagram className="text-white" size={size} />
        </Link>
      );
    default:
      break;
  }
};

export default SocialIcon;
