import { postPreview } from "@/typings";
import CustomText from "../_shared/CustomText";
import CustomImage from "../_shared/CustomImage";
import { urlFor } from "@/lib/clients/sanity";
import { inter } from "@/lib/utils/font";
import TextComponent from "../_shared/TextComponent";
import Container from "../layout/Container";
import CustomSwiper from "../_shared/CustomSwiper";

interface posts {
  postPreviews: postPreview[];
}
const LandingSlider = ({ postPreviews }: posts) => {
  return (
    <section className="w-full">
      <div className="flex justify-center my-10 ">
        <TextComponent variant="header" textSize="4xl" text="Recent Updates" />
      </div>
      <CustomSwiper data={postPreviews}>
        <div></div>
      </CustomSwiper>
    </section>
  );
};

export default LandingSlider;
