import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Dialog><DialogTrigger render={<Button variant="outline" />}>Edit profile</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription></DialogHeader><div className="grid gap-2"><Label htmlFor="name">Name</Label><Input id="name" defaultValue="Ben" /></div><DialogFooter><Button type="submit">Save changes</Button></DialogFooter></DialogContent></Dialog>
  ),
}
