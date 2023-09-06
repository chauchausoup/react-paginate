/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing Link component

import { Link } from '../Link'; // Adjust the import path as needed

describe('Link component', () => {
  it('renders a link with the provided children and className', () => {
    const className = 'custom-class';
    const linkText = 'Click me';

    const { getByText } = render(
      <MemoryRouter>
        <Link className={className} to={''}>
          {linkText}
        </Link>
      </MemoryRouter>
    );

    const linkElement = getByText(linkText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass(className);
  });

  it('applies default classes for styling', () => {
    const linkText = 'Click me';

    const { getByText } = render(
      <MemoryRouter>
        <Link to={''}>{linkText}</Link>
      </MemoryRouter>
    );

    const linkElement = getByText(linkText);

    // Check if the default classes are applied for styling
    expect(linkElement).toHaveClass('text-indigo-600');
    expect(linkElement).toHaveClass('hover:text-indigo-900');
  });

  it('passes other props to the underlying RouterLink component', () => {
    const target = '/example';
    const dataTestId = 'example-link';

    const { getByTestId } = render(
      <MemoryRouter>
        <Link to={target} data-testid={dataTestId}>
          Link Text
        </Link>
      </MemoryRouter>
    );

    const linkElement = getByTestId(dataTestId);

    // Check if the 'to' prop has been passed to the underlying RouterLink
    expect(linkElement).toHaveAttribute('href', target);
  });
});
