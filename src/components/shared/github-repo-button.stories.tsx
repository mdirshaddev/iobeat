import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { GitHubRepoButton } from 'components/shared/github-repo-button';

export default {
  title: 'Components/Shared/GitHub-Repo-Button',
  component: GitHubRepoButton,
  argTypes: {},
  decorators: [withPerformance]
} as ComponentMeta<typeof GitHubRepoButton>;

const Template: ComponentStory<typeof GitHubRepoButton> = args => (
  <GitHubRepoButton {...args} />
);

export const Default = Template.bind({});
