import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Button, { ButtonProps } from "../components/Button/Button";

export default {
  title: "UI Kit/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
