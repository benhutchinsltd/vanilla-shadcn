import type { Meta, StoryObj } from '@storybook/react-vite'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Drawer><DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger><DrawerContent><div className="mx-auto w-full max-w-sm"><DrawerHeader><DrawerTitle>Move goal</DrawerTitle><DrawerDescription>Set your daily activity goal.</DrawerDescription></DrawerHeader><DrawerFooter><Button>Submit</Button><DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose></DrawerFooter></div></DrawerContent></Drawer>
  ),
}
