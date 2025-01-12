import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Text } from "../components/Text/Text";
import { TextProps } from "../components/Text/Text.types";

export default {
  title: "UI Kit/Text",
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const AllVariants = Template.bind({});
AllVariants.args = {
  variant: "h1",
  children: "FOLD",
};

AllVariants.argTypes = {
  variant: {
    control: {
      type: "radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"],
    },
  },
};
