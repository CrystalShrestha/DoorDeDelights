import SignupScreen from "../screens/SignupScreen";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

//to see if it renders correctly
test('renders correctly', () => {
    const tree = renderer.create(<SignupScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  describe('SignupScreen', () => {
    it('navigates on button press', () => {
      const push = jest.fn();
      const { getByText } = render(<SignupScreen navigation={{ push }} />);
      fireEvent.press(getByText('Go to LoginScreen'));
      expect(push).toHaveBeenCalledWith('LoginScreen');
    });
  });

  it("renders default elements", ()=> {
    const { getByTestId, getByText}= render(<SignupScreen/>);
    fireEvent.press(getByTestId("signupBtn"));
    getByText("Invalid Email")
    
  });
  it('shows invalid email error message', ()=> {
    const{getByTestId, getByText}=render(<SignupScreen/>)
    fireEvent.changeText(getByTestId("signupBtn"));

    getByText("Invalid Email");
    expect(queryAllByText('Invalid email').length).toBe(0);

  });