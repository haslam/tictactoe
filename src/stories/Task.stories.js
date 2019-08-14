import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Task from '../components/Task'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_BOX',
  updatedAt: new Date(2019, 0, 1, 9, 0)
}
export const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask')
}

storiesOf('Demo|Task', module)
  .add('default', () =>
    <Task
      task={task}
      {...actions}
    />
  )
  .add('pinned', () =>
    <Task
      task={{ ...task, state: 'TASK_PINNED' }}
      {...actions}
    />
  )
  .add('archived', () =>
    <Task
      task={{ ...task, state: 'TASK_ARCHIVED' }}
      {...actions}
    />
  )
