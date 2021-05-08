/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-08 11:09:48
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-08 15:31:08
 */
import { Story, Meta } from '@storybook/react';

import Button, { ButtonSize, ButtonType, ButtonProps } from './button';

export default {
  title: 'Button组件',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      defaultValue: 'Button',
      description: 'overwritten description',
      table: {
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: null
      }
    },
    size: {

    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  btnType: ButtonType.Primary,
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Large,
  children: 'Button',
  btnType: ButtonType.Primary,
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.Small,
  children: 'Button',
  btnType: ButtonType.Primary,
};
export const Danger = Template.bind({});
Danger.args = {
  size: ButtonSize.Small,
  children: 'Button',
  btnType: ButtonType.Danger,
};
