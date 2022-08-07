import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greetings from './greetings-file';

describe("Greetings-file component", () => {
  test("Renders hello world as a text", () => {
    //Arrange
    render(<Greetings />); //write jsx or the component that needs to be tested

    //Act
    //pass for now

    //Asset
    const getGreetings = screen.getByText("Malya", { exact: false });
    expect(getGreetings).toBeInTheDocument();
  });

  test("renders No changes in the text if button was not clicked", () => {
    render(<Greetings />);
    const outputText = screen.getByText("No changes in the text!", {
      exact: true,
    });
    expect(outputText).toBeInTheDocument();
  });

  test("render changed text on button click", () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputText = screen.getByText("Hey This is the changed text!", {
      exact: true,
    });
    expect(outputText).toBeInTheDocument();
  });

  test("not render unchanged text on button click", () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputText = screen.queryByText("No changes in the text!", {
      exact: true,
    });
    // expect(outputText).not.toBeInTheDocument();
    expect(outputText).toBeNull();
  });
});
