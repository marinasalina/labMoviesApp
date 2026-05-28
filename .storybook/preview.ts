import type { Preview } from "@storybook/react-vite";
import { fn } from 'storybook/test';

const preview: Preview = {
  parameters: {
    actions: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
