import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, expect } from "vitest";
import CreateReservationForm from "@/components/create-reservation-form";
import { useReservationContext } from "@/hooks/use-reservation-context";
import { createReservation } from "@/lib/actions";

// Mock components
vi.mock("@/components/avatar", () => ({
  default: () => <div data-testid="mock-avatar">Avatar</div>,
}));

type ReservationFormProps = {
  handleAction: (formData: FormData) => void;
  maxCapacity: number;
};

// Mock dependencies
vi.mock("@/hooks/use-reservation-context");
vi.mock("@/lib/actions");

// Mock data
const mockRoom = {
  id: 1,
  name: "Test Room",
  bedTypes: "King",
  roomSize: 40,
  privatePool: false,
  images: ["test-image.jpg"],
  maxCapacity: 2,
  regularPrice: 100,
  discount: 20,
};

const mockUser = {
  id: "user1",
  email: "test@example.com",
  app_metadata: {},
  user_metadata: {},
  aud: "authenticated",
  created_at: new Date().toISOString(),
};

const mockSelectedRange = {
  from: new Date("2025-02-01"),
  to: new Date("2025-02-03"),
};

describe("CreateReservationForm", () => {
  const mockResetRange = vi.fn();
  const mockHandleSelect = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useReservationContext).mockReturnValue({
      selectedRange: mockSelectedRange,
      resetRange: mockResetRange,
      handleSelect: mockHandleSelect,
    });
    vi.mocked(createReservation).mockResolvedValue(undefined);
  });

  it("renders the form with user information", () => {
    render(<CreateReservationForm room={mockRoom} user={mockUser} />);

    expect(screen.getByText("Logged in as")).toBeInTheDocument();
    expect(screen.getByText("Reserve now")).toBeInTheDocument();
  });

  it("submits form with correct data", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CreateReservationForm room={mockRoom} user={mockUser} />,
    );

    // Select number of guests
    const guestSelect = container.querySelector('select[name="numGuests"]');
    await user.selectOptions(guestSelect!, "2");

    // Add observations
    const observationsInput = screen.getByPlaceholderText(/special requests/i);
    await user.type(observationsInput, "Test observation");

    // Submit form
    const submitButton = screen.getByText("Reserve now");
    await user.click(submitButton);

    await waitFor(() => {
      expect(createReservation).toHaveBeenCalledWith(
        {
          roomId: mockRoom.id,
          roomPrice: 160,
          numNights: 2,
          startDate: mockSelectedRange.from.toISOString(),
          endDate: mockSelectedRange.to.toISOString(),
          extraPrice: 0,
          hasBreakfast: false,
          isPaid: false,
          status: "pending",
          totalPrice: 160,
        },
        expect.any(FormData),
      );
      expect(mockResetRange).toHaveBeenCalled();
    });
  });

  it("does not submit when date range is not selected", () => {
    vi.mocked(useReservationContext).mockReturnValue({
      selectedRange: undefined,
      resetRange: mockResetRange,
      handleSelect: mockHandleSelect,
    });

    render(<CreateReservationForm room={mockRoom} user={mockUser} />);

    expect(screen.getByText("Start by selecting dates")).toBeInTheDocument();
    expect(createReservation).not.toHaveBeenCalled();
  });

  it("handles form validation", async () => {
    const user = userEvent.setup();
    render(<CreateReservationForm room={mockRoom} user={mockUser} />);

    // Try to submit without selecting guests
    const submitButton = screen.getByText("Reserve now");
    await user.click(submitButton);

    // Check for validation message
    expect(
      await screen.findByText(/Please select a number/i),
    ).toBeInTheDocument();
    expect(createReservation).not.toHaveBeenCalled();
  });
});
