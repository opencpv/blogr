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
