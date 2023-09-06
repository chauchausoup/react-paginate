/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';

import { Notification } from '@/components/Notifications/Notification'; // Adjust the import path as needed

// Mock the onDismiss function
const mockOnDismiss = jest.fn();

const sampleNotification = {
  id: '123',
  type: 'info',
  title: 'Sample Title',
  message: 'Sample Message',
};

test('renders a notification with the correct content', () => {
  const { getByText, getByRole } = render(
    // eslint-disable-next-line
    // @ts-ignore
    <Notification notification={sampleNotification} onDismiss={mockOnDismiss} />
  );

  // Assert that the notification content is rendered correctly
  expect(getByText(sampleNotification.title)).toBeInTheDocument();
  expect(getByText(sampleNotification.message)).toBeInTheDocument();
  expect(getByRole('alert')).toHaveAttribute('aria-label', sampleNotification.title);
});

test('calls onDismiss when close button is clicked', () => {
  const { getByRole } = render(
    // eslint-disable-next-line
    // @ts-ignore
    <Notification notification={sampleNotification} onDismiss={mockOnDismiss} />
  );

  const closeButton = getByRole('button', { name: 'Close' });

  // Click the close button
  fireEvent.click(closeButton);

  // Assert that the onDismiss function is called with the correct id
  expect(mockOnDismiss).toHaveBeenCalledWith(sampleNotification.id);
});
