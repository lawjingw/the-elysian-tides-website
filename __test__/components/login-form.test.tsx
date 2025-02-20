import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "@/components/login-form";
import { vi, expect } from "vitest";

vi.mock("@/lib/actions", () => ({
  login: vi.fn(),
}));

describe("LoginForm", () => {
  it("renders login form with all required fields", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have default values", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(
      /email address/i,
    ) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(
      /password/i,
    ) as HTMLInputElement;

    expect(emailInput.value).toBe("guest@example.com");
    expect(passwordInput.value).toBe("Guest!23456");
  });

  it("should allow user to input credentials", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const rememberCheckbox = screen.getByLabelText(/remember me/i);

    await user.clear(emailInput);
    await user.type(emailInput, "test@example.com");
    await user.clear(passwordInput);
    await user.type(passwordInput, "Test123!");
    await user.click(rememberCheckbox);

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("Test123!");
    expect(rememberCheckbox).toBeChecked();
  });
});
