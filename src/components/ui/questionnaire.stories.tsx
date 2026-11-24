import type { Meta, StoryObj } from '@storybook/react-vite'
import { Questionnaire, QuestionnaireActions, QuestionnaireChoice, QuestionnaireChoices, QuestionnaireItem, QuestionnaireNext, QuestionnaireProgress, QuestionnaireSubmit, QuestionnaireTitle } from '@/components/ui/questionnaire'


const meta = {
  title: 'UI/Questionnaire',
  component: Questionnaire,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Questionnaire className="w-96"><QuestionnaireProgress /><QuestionnaireItem name="colour"><QuestionnaireTitle>Favourite colour?</QuestionnaireTitle><QuestionnaireChoices><QuestionnaireChoice value="red">Red</QuestionnaireChoice><QuestionnaireChoice value="blue">Blue</QuestionnaireChoice></QuestionnaireChoices></QuestionnaireItem><QuestionnaireActions><QuestionnaireNext /><QuestionnaireSubmit /></QuestionnaireActions></Questionnaire>
  ),
}
