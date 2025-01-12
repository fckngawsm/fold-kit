import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Chip } from "../components/Chip/Chip";
import { ChipProps } from "../components/Chip/Chip.types";

export default {
  title: "UI Kit/Button",
  component: Chip,
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Удаленно",
  type: "neutral",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Удаленно",
  type: "ghost",
};

export const Active = Template.bind({});
Active.args = {
  label: "Удаленно (акт)",
  type: "active",
};
