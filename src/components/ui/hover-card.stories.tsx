import type { Meta, StoryObj } from '@storybook/react-vite'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <HoverCard><HoverCardTrigger render={<Button variant="link" />}>@nextjs</HoverCardTrigger><HoverCardContent className="w-full max-w-sm"><p className="text-sm">The React Framework – created and maintained by @vercel.</p></HoverCardContent></HoverCard>
  ),
}
