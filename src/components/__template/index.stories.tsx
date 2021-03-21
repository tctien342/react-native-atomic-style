import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { ITemplateProps, Template } from '.';

export default {
  title: '__TemplateGroup/__Template',
  component: Template,
} as Meta;

const StoryTemplate: Story<ITemplateProps> = (args) => <Template {...args} />;

export const TemplateNormal = StoryTemplate.bind({});
TemplateNormal.args = {
  title: 'Hello halocomUI',
};
