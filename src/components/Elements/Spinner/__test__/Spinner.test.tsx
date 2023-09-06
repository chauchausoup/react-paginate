/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */

import { render } from '@testing-library/react';
import React from 'react';

import { Spinner } from '../Spinner'; // Adjust the import path as needed

describe('Spinner component', () => {
  it('renders with default size and variant', () => {
    const { container } = render(<Spinner />);

    // Check if the SVG element has the default 'md' size class
    expect(container.firstChild).toHaveClass('h-8 w-8');

    // Check if the SVG element has the default 'primary' variant class
    expect(container.firstChild).toHaveClass('text-blue-600');
  });

  it('renders with custom size and variant', () => {
    const { container } = render(<Spinner size="lg" variant="light" />);

    // Check if the SVG element has the 'lg' size class
    expect(container.firstChild).toHaveClass('h-16 w-16');

    // Check if the SVG element has the 'light' variant class
    expect(container.firstChild).toHaveClass('text-white');
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-spinner';
    const { container } = render(<Spinner className={customClassName} />);

    // Check if the SVG element has the custom className
    expect(container.firstChild).toHaveClass(customClassName);
  });

  it('renders a "Loading" span element with sr-only class', () => {
    const { getByText } = render(<Spinner />);

    // Check if the "Loading" span element with sr-only class is present
    const loadingSpan = getByText('Loading');
    expect(loadingSpan).toBeInTheDocument();
    expect(loadingSpan).toHaveClass('sr-only');
  });
});
