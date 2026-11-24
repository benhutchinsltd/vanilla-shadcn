import type { Meta, StoryObj } from '@storybook/react-vite'
import { Terminal, CircleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'


const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Alert className="w-full max-w-sm"><Terminal /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-full max-w-sm"><CircleAlert /><AlertTitle>Error</AlertTitle><AlertDescription>Your session has expired. Please log in again.</AlertDescription></Alert>
  ),
}
