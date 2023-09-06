// Import the storage object from your utility file
import storage, { storagePrefix } from '../storage'; // Replace with the actual path to your utility file

describe('localStorage operations', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should set and retrieve a token from localStorage', () => {
    // Arrange
    const token = 'your_token_here';

    // Act
    storage.setToken(token);
    const retrievedToken = storage.getToken();

    // Assert
    expect(retrievedToken).toEqual(token);
  });

  it('should clear a token from localStorage', () => {
    // Arrange
    const token = 'your_token_here';
    storage.setToken(token);

    // Act
    storage.clearToken();
    const retrievedToken = storage.getToken();

    // Assert
    expect(retrievedToken).toBeNull();
  });

  it('should use the correct storage key prefix', () => {
    // Arrange
    const token = 'your_token_here';

    // Act
    storage.setToken(token);

    // Assert
    const localStorageKey = Object.keys(localStorage)[0];
    expect(localStorageKey).toBe(`${storagePrefix}token`);
  });

  // Add more test cases as needed
});
