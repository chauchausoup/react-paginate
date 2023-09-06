/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';

import { Button } from '../Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button>Click me</Button>);

    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
  });

  it('renders with custom variant and size', () => {
    const { getByText } = render(
      <Button variant="inverse" size="lg">
        Custom Button
      </Button>
    );

    const button = getByText('Custom Button');

    expect(button).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    const { getByTestId } = render(
      <Button isLoading data-testid="loading-button">
        Loading...
      </Button>
    );

    const loadingButton = getByTestId('loading-button');

    expect(loadingButton).toBeInTheDocument();
    expect(loadingButton).toHaveClass('disabled:opacity-70');
    expect(loadingButton).toHaveClass('disabled:cursor-not-allowed');
  });

  it('handles click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
