import { renderHook, act } from '@testing-library/react-hooks';

import { useNotificationStore } from '../notifications'; // Replace with your actual file path

describe('useNotificationStore', () => {
  it('should add a notification', () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      result.current.addNotification({
        type: 'info',
        title: 'Info Notification',
      });
    });

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].type).toBe('info');
    expect(result.current.notifications[0].title).toBe('Info Notification');
  });

  it('should dismiss a notification', () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      result.current.addNotification({
        type: 'info',
        title: 'Info Notification',
      });
    });

    const notificationId = result.current.notifications[0].id;

    act(() => {
      result.current.dismissNotification(notificationId);
    });

    expect(result.current.notifications).toHaveLength(0);
  });

  it('should automatically dismiss a notification after 3 seconds', async () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      result.current.addNotification({
        type: 'info',
        title: 'Info Notification',
      });
    });

    expect(result.current.notifications).toHaveLength(1);

    // Fast-forward time by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.notifications).toHaveLength(0);

    jest.useRealTimers();
  });
});
