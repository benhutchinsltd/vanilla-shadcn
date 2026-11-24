import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '@/components/ui/context-menu'


const meta = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ContextMenu><ContextMenuTrigger className="flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger><ContextMenuContent className="w-52"><ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem><ContextMenuItem>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem><ContextMenuSeparator /><ContextMenuItem>Reload<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem></ContextMenuContent></ContextMenu>
  ),
}
