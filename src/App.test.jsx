import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/BeamsBackground", () => ({
  BeamsBackground: () => null,
}));

test("renders without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
