import _ from 'lodash';
import * as React from 'react';

import { Button } from '@/components/Elements';
import { Dialog, DialogTitle } from '@/components/Elements/Dialog';
import { useDisclosure } from '@/hooks/useDisclosure';

import { SpellData } from '../../types';

export type CardDialogProps = {
  triggerButton: React.ReactElement;
  cancelButtonText?: string;
  icon?: 'danger' | 'info';
  isDone?: boolean;
  data: SpellData;
};

export const CardDialog = ({
  triggerButton,
  isDone = false,
  data,
  cancelButtonText = 'Cancel',
}: CardDialogProps) => {
  const { close, open, isOpen } = useDisclosure();

  const cancelButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  const trigger = React.cloneElement(triggerButton, {
    onClick: open,
  });

  return (
    <>
      {trigger}

      <Dialog isOpen={isOpen} onClose={close} initialFocus={cancelButtonRef}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                {data?.name}
              </DialogTitle>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {data?.desc
                    ? _.truncate(data.desc, {
                        length: 250,
                        omission: '...',
                      })
                    : ''}
                </p>
              </div>

              {/* Grid layout with two columns */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Left Column */}
                <div>
                  <p className="text-sm font-semibold">Range:</p>
                  <p className="text-sm text-gray-500">{data?.range}</p>

                  <p className="text-sm font-semibold">Components:</p>
                  <p className="text-sm text-gray-500">{data?.components?.join(', ')}</p>

                  <p className="text-sm font-semibold">Duration:</p>
                  <p className="text-sm text-gray-500">{data?.duration}</p>

                  <p className="text-sm font-semibold">Casting Time:</p>
                  <p className="text-sm text-gray-500">{data?.casting_time}</p>
                </div>

                {/* Right Column - Add more fields here */}
                <div>
                  <p className="text-sm font-semibold">Ritual:</p>
                  <p className="text-sm text-gray-500">{data?.ritual ? 'Yes' : 'No'}</p>

                  <p className="text-sm font-semibold">Concentration:</p>
                  <p className="text-sm text-gray-500">{data?.concentration ? 'Yes' : 'No'}</p>

                  <p className="text-sm font-semibold">Level:</p>
                  <p className="text-sm text-gray-500">{data?.level}</p>

                  <p className="text-sm font-semibold">School:</p>
                  <p className="text-sm text-gray-500">{data?.school?.name}</p>
                </div>
              </div>

              {/* End of grid layout */}
            </div>
          </div>
          <div className="mt-4 flex space-x-2 justify-center">
            <Button
              type="button"
              variant="inverse"
              className="w-full inline-flex justify-center rounded-md border focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={close}
              ref={cancelButtonRef}
            >
              {cancelButtonText}
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
