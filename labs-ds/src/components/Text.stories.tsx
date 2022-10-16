import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default{
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Teste texto',
        
    },
}as Meta<TextProps>

export const Default: StoryObj = {}