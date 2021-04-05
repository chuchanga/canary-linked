import Button from "../BlueButton.vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {}
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: "<blue-button @onClick=\"onClick\" v-bind=\"$props\" />",
});

export const ByDefault = Template.bind({});
