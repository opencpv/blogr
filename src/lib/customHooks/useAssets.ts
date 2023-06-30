import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const useAssets = () => {
  return {
    social: {
      linkedin: AiOutlineLinkedin,
      github: AiOutlineGithub,
      facebook: AiOutlineFacebook,
      youtube: AiOutlineYoutube,
      instagram: AiOutlineInstagram,
    },
  };
};

export default useAssets;
