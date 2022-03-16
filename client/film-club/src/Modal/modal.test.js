/* 
  Check is showing when prop show is passed true
  Check addWatchedFromHome is called with the value from the modal.
  Check X button closes modal
*/

import { render, screen } from '@testing-library/react';
import { MovieContext } from '../App';
import Modal from './modal';

const props = {
  closeModal: jest.fn(() => {}),
  show: true,
  addWatch: jest.fn((movie) => movie),
};

const contextValue = {
  addWatchedFromHome: jest.fn((movie) => movie),
};

test('Modal displays correctly', () => {
  render(
    <MovieContext.Provider value={contextValue}>
      <Modal {...props} />
    </MovieContext.Provider>
  );

  expect(
    screen.getByText('What did you think of the movie?')
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your rating from 1 to 5...'));
});
