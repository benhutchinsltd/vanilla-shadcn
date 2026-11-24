import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader><CardTitle>Create project</CardTitle><CardDescription>Deploy your new project in one click.</CardDescription><CardAction><Button variant="link">Help</Button></CardAction></CardHeader>
      <CardContent><p className="text-sm text-muted-foreground">Your project will be created with sensible defaults.</p></CardContent>
      <CardFooter className="justify-between"><Button variant="outline">Cancel</Button><Button>Deploy</Button></CardFooter>
    </Card>
  ),
}
