import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Example add functionallity", () => {
  it("should render first screen", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /login/i })).toBeDefined();
  });
});
