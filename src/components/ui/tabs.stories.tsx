import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-sm"><TabsList><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="password">Password</TabsTrigger></TabsList><TabsContent value="account" className="text-sm">Make changes to your account here.</TabsContent><TabsContent value="password" className="text-sm">Change your password here.</TabsContent></Tabs>
  ),
}
