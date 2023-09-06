/* eslint-disable @typescript-eslint/no-var-requires */
import { useSpellList, Spell } from '../useSpellList';

// Mock useIndexedDB hook
jest.mock('@/hooks/useIndexDB', () => ({
  useIndexedDB: jest.fn(),
}));

// Mock useNotificationStore hook
jest.mock('@/stores/notifications', () => ({
  useNotificationStore: jest.fn(),
}));

describe('useSpellList hook', () => {
  let mockDb: any;
  let mockAddNotification: any;

  beforeEach(() => {
    // Create mock instances for useIndexedDB and useNotificationStore
    mockDb = {
      items: {
        add: jest.fn(),
      },
    };
    mockAddNotification = jest.fn();

    // Mock the useIndexedDB hook to return the mock db object
    require('@/hooks/useIndexDB').useIndexedDB.mockReturnValue(mockDb);

    // Mock the useNotificationStore hook to return the mock addNotification function
    require('@/stores/notifications').useNotificationStore.mockReturnValue({
      addNotification: mockAddNotification,
    });
  });

  it('should add a spell to the database and trigger a success notification', async () => {
    const { addSpellFromList } = useSpellList();

    const spell: Spell = { name: 'Test Spell', index: 'test-spell' };

    // Call the addSpellFromList function
    await addSpellFromList(spell);

    // Verify that the spell was added to the database
    expect(mockDb.items.add).toHaveBeenCalledWith(spell);

    // Verify that the success notification was triggered with the correct title
    expect(mockAddNotification).toHaveBeenCalledWith({
      type: 'success',
      title: `${spell.name} added to Favourite list.`,
    });
  });

  it('should handle an error when adding a spell and trigger an error notification', async () => {
    const { addSpellFromList } = useSpellList();

    // Mock an error when adding a spell
    mockDb.items.add.mockRejectedValue('Error adding spell');

    const spell: Spell = { name: 'Test Spell', index: 'test-spell' };

    // Call the addSpellFromList function
    await addSpellFromList(spell);

    // Verify that the error notification was triggered with the error message
    expect(mockAddNotification).toHaveBeenCalledWith({
      type: 'error',
      title: 'Error adding spell',
    });
  });
});
