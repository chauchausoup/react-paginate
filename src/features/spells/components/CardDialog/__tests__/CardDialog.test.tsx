/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import { CardDialog } from '../CardDialog';

describe('CardDialog component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <CardDialog
        triggerButton={<button>Open Dialog</button>}
        data={{
          name: 'Spell Name',
          desc: 'spell desc',
          range: '60 feet',
          components: ['V', 'S'],
          duration: '1 minute',
          casting_time: '1 action',
          ritual: true,
          concentration: false,
          level: 3,
          school: { name: 'Evocation' },
        }}
      />
    );

    const openButton = getByText('Open Dialog');
    expect(openButton).toBeInTheDocument();
  });

  it('opens and closes the dialog correctly', async () => {
    const { getByText, queryByText } = render(
      <CardDialog
        triggerButton={<button>Open Dialog</button>}
        data={{
          name: 'Spell Name',
          desc: 'spell desc',
          range: '60 feet',
          components: ['V', 'S'],
          duration: '1 minute',
          casting_time: '1 action',
          ritual: true,
          concentration: false,
          level: 3,
          school: { name: 'Evocation' },
        }}
      />
    );

    const openButton = getByText('Open Dialog');
    fireEvent.click(openButton);

    const dialogTitle = getByText('Spell Name');
    expect(dialogTitle).toBeInTheDocument();

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    await waitFor(() => {
      const closedDialogTitle = queryByText('Spell Name');
      expect(closedDialogTitle).not.toBeInTheDocument();
    });
  });
});
