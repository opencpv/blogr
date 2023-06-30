import { postPreview } from "@/typings";
import CustomText from "../_shared/CustomText";
import CustomImage from "../_shared/CustomImage";
import { urlFor } from "@/lib/clients/sanity";
import { inter } from "@/lib/utils/font";

interface posts {
  postPreviews: postPreview[];
}
const LandingSlider = ({ postPreviews }: posts) => {
  return (
    <section className="w-full">
      <div className="flex justify-center my-10 ">
        <CustomText type="h1" variant="primary" text="Recent Posts" />
      </div>
      {postPreviews.map((post, index) => (
        <div
          className="flex flex-wrap w-[60vw] mx-auto  lg:flex-nowrap gap-8 mt-5 "
          key={index}
        >
          <div className="flex justify-center ">
            <CustomImage
              img={urlFor(post.image).url()!}
              alt={post.title}
              sizeStyle={"w-[330px] h-[280px] md:w-[440px] md:h-[385px]"}
              roundedStyle={"rounded-md"}
            />
          </div>
          <div>
            {post.categories.map((category, index2) => (
              <CustomText
                type="body"
                key={index2}
                text={category.name}
                variant="primary"
                size="12px"
              />
            ))}
            <CustomText
              type="body"
              text={post.title}
              variant="secondary"
              size="[40px]"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default LandingSlider;
