import { Meta, StoryFn } from "@storybook/react";
import { FilterRow } from "../components/FilterRow/FilterRow";
import { FilterRowProps } from "../components/FilterRow/FilterRow.types";

export default {
  title: "UI Kit/FilterRow",
  component: FilterRow,
} as Meta;

const Template: StoryFn<FilterRowProps> = (args) => <FilterRow {...args} />;

export const DefaultFilter = Template.bind({});
DefaultFilter.args = {
  options: ["Москва", "Питер", "Другое", "За рубежом"],
};
