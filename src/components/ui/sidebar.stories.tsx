import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, Inbox, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const items = [
  { title: 'Home', icon: Home },
  { title: 'Inbox', icon: Inbox },
  { title: 'Settings', icon: Settings },
]

const meta = {
  title: 'UI/Sidebar',
  component: SidebarProvider,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarProvider>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <SidebarProvider className="min-h-96"><Sidebar collapsible="none" className="h-96"><SidebarContent><SidebarGroup><SidebarGroupLabel>Application</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>{items.map((item) => (<SidebarMenuItem key={item.title}><SidebarMenuButton render={<a href="#" />}><item.icon /><span>{item.title}</span></SidebarMenuButton></SidebarMenuItem>))}</SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><SidebarInset><header className="flex h-12 items-center gap-2 border-b px-4"><SidebarTrigger /><span className="text-sm">Content</span></header></SidebarInset></SidebarProvider>
  ),
}
