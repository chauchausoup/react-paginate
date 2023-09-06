import { nanoid } from 'nanoid';
import create from 'zustand';

export type Notification = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};

type NotificationsStore = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationsStore>((set) => ({
  notifications: [],
  addNotification: (notification) => {
    const id = nanoid();
    set((state) => ({
      notifications: [...state.notifications, { id, ...notification }],
    }));

    // Automatically dismiss the notification after 3 seconds
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 3000); // 3000 milliseconds (3 seconds)
  },
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id),
    })),
}));
