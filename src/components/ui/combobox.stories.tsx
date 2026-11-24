import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']

const meta = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Combobox items={frameworks}><ComboboxInput placeholder="Select a framework" className="w-64" /><ComboboxContent><ComboboxEmpty>No items found.</ComboboxEmpty><ComboboxList>{(item: string) => (<ComboboxItem key={item} value={item}>{item}</ComboboxItem>)}</ComboboxList></ComboboxContent></Combobox>
  ),
}
