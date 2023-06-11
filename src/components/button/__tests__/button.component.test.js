import { render, screen } from "@testing-library/react";
import Button from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing passed to it", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: black");
  });
  test("should render google button when given google-sign-in button type prop", () => {
    render(<Button buttonType="google-sign-in" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #4285f4");
  });
  test("should render inverted button when given inverted button type prop", () => {
    render(<Button buttonType="inverted" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("should be disabled when loading", () => {
    render(<Button isLoading />);
    const loadingButton = screen.getByRole("button");
    expect(loadingButton).toBeDisabled();
  });
});
