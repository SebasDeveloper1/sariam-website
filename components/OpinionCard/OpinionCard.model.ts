interface Author {
  name: string;
  role: string;
  photo: {
    url: string;
    description: string;
  };
}

export interface MockOpinionTestProps {
  author: Author;
  content: string;
  sys: { id: string };
}
