import type { Meta, StoryObj } from '@storybook/react-vite'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'


const meta = {
  title: 'UI/Command',
  component: Command,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg border shadow-md"><CommandInput placeholder="Type a command or search..." /><CommandList><CommandEmpty>No results found.</CommandEmpty><CommandGroup heading="Suggestions"><CommandItem>Calendar</CommandItem><CommandItem>Search</CommandItem><CommandItem>Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem></CommandGroup><CommandSeparator /><CommandGroup heading="Other"><CommandItem>Profile</CommandItem><CommandItem>Billing</CommandItem></CommandGroup></CommandList></Command>
  ),
}
