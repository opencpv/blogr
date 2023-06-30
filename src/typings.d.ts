export interface socialLinksProps {
  _id: string;
  visibility: boolean;
  selectedLink: string;
  url: string;
}

interface categories {
  name: string;
}
export interface postPreview {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    position: string;
    user: {
      profileImage: {
        asset: {
          _ref: string;
          _type: string;
        };
        _type: string;
      };
    };
  };
  categories: categories[];
  _createdAt: string;
  except: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _id: string;
  };
  slug: string;
  body: [object];
}

export interface CustomImageProps {
  img: string;
  alt: string;
  sizeStyle: string;
  roundedStyle?: string;
}

interface customSwiperProps {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  onSlideChange?: any;
  data: Array<postPreview>;
}
