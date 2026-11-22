import removePlaceholderUrls from './postcss-remove-placeholder-urls.cjs';

const config = {
  plugins: ['@tailwindcss/postcss', removePlaceholderUrls],
};

export default config;
