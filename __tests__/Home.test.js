import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from "./App"
import LoginScreen from "../src/LoginScreen"
import Home from '../src/Home'
describe('LoginScreen', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<LoginScreen navigation={{ push }} />);
    fireEvent.press(getByText('Go to Home'));
    expect(push).toHaveBeenCalledWith('Home');
  });
});