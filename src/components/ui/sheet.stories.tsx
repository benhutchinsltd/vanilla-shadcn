import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Sheet><SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger><SheetContent><SheetHeader><SheetTitle>Edit profile</SheetTitle><SheetDescription>Make changes to your profile here.</SheetDescription></SheetHeader><SheetFooter><Button>Save changes</Button></SheetFooter></SheetContent></Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet><SheetTrigger render={<Button variant="outline" />}>Open left</SheetTrigger><SheetContent side="left"><SheetHeader><SheetTitle>Navigation</SheetTitle><SheetDescription>Slides in from the left.</SheetDescription></SheetHeader></SheetContent></Sheet>
  ),
}
