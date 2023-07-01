import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      },
  },
  documents: 'api/**/*.graphql',
  generates: {
    'api/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
