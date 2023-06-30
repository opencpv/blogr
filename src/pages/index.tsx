import { postPreview, socialLinksProps } from "@/typings";
import Navbar from "@/components/layout/Navbar";
import { sanityClient } from "@/lib/clients/sanity";
import Footer from "@/components/layout/Footer";
import LandingSlider from "@/components/cards/LandingSlider";

interface linksProps {
  socialLinks: socialLinksProps[];
  postPreviews: postPreview[];
}

export default function Home({ socialLinks, postPreviews }: linksProps) {
  return (
    <main className="w-full  bg-white">
      <Navbar socialLinks={socialLinks} />
      <LandingSlider postPreviews={postPreviews} />
      <Footer socialLinks={socialLinks} />
    </main>
  );
}

export const getStaticProps = async () => {
  try {
    const socialQuery = `*[_type == "socialLinks"]{
        _id,
        selectedLink,
        url,
        visibility
      }`;

    const postQuery = `*[_type == "post"]{
      _id,
      title, 
      author->{name, position, user->{profileImage}},
      categories[]->{name},
      slug,
      except,
      _createdAt,
      image
    }`;
    const socialLinks = await sanityClient.fetch(socialQuery);
    const posts = await sanityClient.fetch(postQuery);

    // Convert socialLinks to a JSON-serializable format
    const serializedSocialLinks = JSON.parse(JSON.stringify(socialLinks));
    const serializedPosts = JSON.parse(JSON.stringify(posts));

    return {
      props: {
        socialLinks: serializedSocialLinks,
        postPreviews: serializedPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching socialLinks:", error);
    return {
      props: {
        socialLinks: [],
        postPreviews: [],
      },
    };
  }
};
