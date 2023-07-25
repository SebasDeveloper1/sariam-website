import { MockOpinionTestProps } from '@/components/OpinionCard/OpinionCard.model'; // Mocked opinion data for testing
export const MockOpinion: MockOpinionTestProps = {
  author: {
    name: 'John Doe',
    role: 'CEO',
    photo: {
      url: 'https://example.com/photo.jpg',
      description: 'John Doe photo',
    },
  },
  content: 'This is a great product!',
  sys: { id: 'HUWhn2yQFFqvsAKxX6Htl' },
};
