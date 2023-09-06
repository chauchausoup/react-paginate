/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FunctionComponent } from 'react';

import { AppProvider } from '@/providers/app';

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)],
    { timeout: 4000 }
  );

export const render = async (
  ui: any,
  { route = '/', ...renderOptions }: Record<string, any> = {}
) => {
  // if you want to render the app unauthenticated then pass "null" as the user

  window.history.pushState({}, 'Test page', route);

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AppProvider as FunctionComponent<unknown>,
      ...renderOptions,
    }),
  };

  await waitForLoadingToFinish();

  return returnValue;
};

export * from '@testing-library/react';
export { userEvent, rtlRender };
