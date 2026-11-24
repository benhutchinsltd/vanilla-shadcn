import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldLegend } from '@/components/ui/field'
import { Input } from '@/components/ui/input'


const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <FieldSet className="w-80"><FieldLegend>Account</FieldLegend><FieldGroup><Field><FieldLabel htmlFor="username">Username</FieldLabel><Input id="username" placeholder="shadcn" /><FieldDescription>Choose a unique username.</FieldDescription></Field><Field><FieldLabel htmlFor="pw">Password</FieldLabel><Input id="pw" type="password" /></Field></FieldGroup></FieldSet>
  ),
}
