import { render, fireEvent, waitFor } from '@testing-library/react-native';

import UserAccount from "../src/UserAccount"

describe('UserAccount', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<UserAccount navigation={{ push }} />);
    fireEvent.press(getByText('Go to AboutUs'));
    expect(push).toHaveBeenCalledWith('AboutUs');
  });
});