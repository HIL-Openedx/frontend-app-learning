import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  nextButton: {
    id: 'learn.sequence.navigation.next.button',
    defaultMessage: '下一頁',
    description: 'Button to advance to the next section',
  },
  nextUpButton: {
    id: 'learn.sequence.navigation.next.up.button',
    defaultMessage: '下一頁：{title}',
    description: 'Button to advance to the next section, with title',
  },
  previousButton: {
    id: 'learn.sequence.navigation.previous.button',
    defaultMessage: '上一頁',
    description: 'Button to return to the previous section',
  },
});

export default messages;
