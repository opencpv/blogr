import { urlFor } from "@/lib/clients/sanity";
import CustomImage from "../_shared/CustomImage";
import Container from "../layout/Container";
import TextComponent from "../_shared/TextComponent";
import { postPreview } from "@/typings";

interface prop {
  post: postPreview;
}

const LandingSlideItem = ({ post }: prop) => {
  return (
    <Container>
      <div className="flex flex-wrap lg:flex-nowrap gap-x-8 gap-y-2  ">
        <div className="flex  justify-center">
          <CustomImage
            img={urlFor(post.image).url()!}
            alt={post.title}
            sizeStyle={"w-[330px] h-[280px] md:w-[440px] md:h-[385px]"}
            roundedStyle={"rounded-md"}
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            {post.categories.map((category, index) => [
              <TextComponent
                key={index}
                variant="primary"
                textSize="sm"
                text={category.name}
                prefix="["
                suffix="]"
              />,
            ])}
            <p className="font-bold text-slate-600"> | </p>
            <TextComponent
              variant="primary"
              textSize="sm"
              text={new Date(post._createdAt).toLocaleDateString()}
            />
          </div>
          <TextComponent variant="subheader" textSize="2xl" text={post.title} />
          <TextComponent variant="secondary" textSize="md" text={post.except} />
          <div className="mt-4"></div>
          <div className="flex gap-2">
            <CustomImage
              img={urlFor(post.author.user.profileImage).url()!}
              alt={post.author.name}
              sizeStyle={"w-[60px] h-[60px]"}
              roundedStyle={""}
            />

            <div>
              <TextComponent
                variant="primary"
                textSize="md"
                text={post.author.name}
              />
              <TextComponent
                variant="secondary"
                textSize="sm"
                text={post.author.position}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingSlideItem;
