import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'


const meta = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-56"><NativeSelectOption value="">Select status</NativeSelectOption><NativeSelectOption value="todo">Todo</NativeSelectOption><NativeSelectOption value="done">Done</NativeSelectOption></NativeSelect>
  ),
}
