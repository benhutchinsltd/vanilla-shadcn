import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <DropdownMenu><DropdownMenuTrigger render={<Button variant="outline" />}>Open</DropdownMenuTrigger><DropdownMenuContent className="w-52"><DropdownMenuLabel>My Account</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuGroup><DropdownMenuItem>Profile<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem><DropdownMenuItem>Billing<DropdownMenuShortcut>⌘B</DropdownMenuShortcut></DropdownMenuItem><DropdownMenuItem>Settings<DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem></DropdownMenuGroup><DropdownMenuSeparator /><DropdownMenuItem>Log out</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
  ),
}
