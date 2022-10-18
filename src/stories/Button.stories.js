import Button from "../components/Button"

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { 
        handleClick: { action: "handleClick" },
        size : {
            options : ['sm','md','lg'],
            control : { type: 'radio' }
        }
    },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({}) 
Primary.args = {
    backgroundColor: "#FF1C44",
    color: "#FFFFFF",
    borderColor: "transparent",
    label: "Primary",
    size: "md",
}

export const Secondary = Template.bind({}) 
Secondary.args = {
    backgroundColor: "transparent",
    color: "#FF1C44",
    borderColor: "#FF1C44",
    label: "Secondary",
    size: "lg",
}