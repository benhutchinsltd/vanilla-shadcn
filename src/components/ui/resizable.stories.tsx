import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'


const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-40 w-96 rounded-lg border"><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">One</div></ResizablePanel><ResizableHandle withHandle /><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">Two</div></ResizablePanel></ResizablePanelGroup>
  ),
}
