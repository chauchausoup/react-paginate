import { render, screen } from '@testing-library/react';

import { Notifications } from '@/components/Notifications'; // Adjust the import path as needed
import { useNotificationStore, Notification } from '@/stores/notifications'; // Mocked store import

// Mock the useNotificationStore
jest.mock('@/stores/notifications', () => ({
  useNotificationStore: jest.fn(),
}));

// Sample notifications for testing
const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'info',
    title: 'Info Notification',
    message: 'This is an info message.',
  },
  {
    id: '2',
    type: 'error',
    title: 'Error Notification',
    message: 'An error occurred.',
  },
];

// Mock the dismissNotification function
const mockDismissNotification = jest.fn();

beforeEach(() => {
  // Reset the mock function and provide mock data for the notifications
  mockDismissNotification.mockReset();
  (useNotificationStore as unknown as jest.Mock).mockReturnValue({
    notifications: sampleNotifications,
    dismissNotification: mockDismissNotification,
  });
});

test('renders a list of notifications', () => {
  render(<Notifications />);

  // Assert that each notification's title and message are rendered
  sampleNotifications.forEach((notification) => {
    expect(screen.getByText(notification.title)).toBeInTheDocument();
  });

  // Assert that there are as many alerts as there are notifications
  const alerts = screen.getAllByRole('alert');
  expect(alerts.length).toBe(sampleNotifications.length);
});
