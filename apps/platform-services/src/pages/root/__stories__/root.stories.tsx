import { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Root from '../root';

const meta: Meta<typeof Root> = {
  component: Root,
  title: 'Base/Pages/Root',
  decorators: [
    (Story, { parameters }) => {
      const { initialEntry } = parameters;
      return (
        <RouterProvider
          router={createMemoryRouter(
            [
              {
                path: 'platform-services',
                element: Story(),
                handle: {
                  crumb: () => ({ to: '/platform-services', name: 'Dashboard' }),
                },
                children: [
                  {
                    path: 'projects',
                    handle: {
                      crumb: () => ({ to: '/projects', name: 'Projects' }),
                    },
                  },
                ],
              },
            ],
            {
              initialEntries: ['/', initialEntry],
              initialIndex: 1,
            },
          )}
        ></RouterProvider>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Root>;

export const Overview: Story = {
  parameters: {
    initialEntry: '/platform-services/projects',
  },
};
