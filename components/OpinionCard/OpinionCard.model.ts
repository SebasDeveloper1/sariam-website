interface Author {
  name: string;
  role: string;
  photo: {
    title: string;
    description: string;
    size: number;
    url: string;
    width: number;
    height: number;
  };
}

export interface MockOpinionTestProps {
  author: Author;
  content: string;
  sys: { id: string };
}
