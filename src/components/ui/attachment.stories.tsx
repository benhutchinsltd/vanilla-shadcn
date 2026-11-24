import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileText } from 'lucide-react'
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from '@/components/ui/attachment'


const meta = {
  title: 'UI/Attachment',
  component: Attachment,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <AttachmentGroup><Attachment><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentTitle>report.pdf</AttachmentTitle><AttachmentDescription>2.4 MB</AttachmentDescription></AttachmentContent></Attachment></AttachmentGroup>
  ),
}

export const Uploading: Story = {
  render: () => (
    <Attachment state="uploading"><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentTitle>design.fig</AttachmentTitle><AttachmentDescription>Uploading…</AttachmentDescription></AttachmentContent></Attachment>
  ),
}
