import { render, screen } from "@testing-library/react";
import RoomCard from "@/components/room-card";
import { Room } from "@/lib/type";

describe("RoomCard", () => {
  const mockRoom: Room = {
    id: 1,
    name: "Deluxe Suite",
    maxCapacity: 4,
    bedTypes: "1 King Bed + 2 Single Beds",
    roomSize: 55,
    privatePool: true,
    regularPrice: 500,
    discount: 100,
    images: [],
    description: "A luxurious suite with sea view",
  };

  it("renders room name correctly", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText("Deluxe Suite")).toBeInTheDocument();
  });

  it("displays room capacity information", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText(/For up to/)).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText(/guests/)).toBeInTheDocument();
  });

  it("shows bed type information", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText("1 King Bed + 2 Single Beds")).toBeInTheDocument();
  });

  it("displays room size with correct unit", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText(/55/)).toBeInTheDocument();
    expect(screen.getByText(/m/)).toBeInTheDocument();
  });

  it("shows private pool information when available", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText("Private pool")).toBeInTheDocument();
  });

  it("hides private pool information when not available", () => {
    const roomWithoutPool = { ...mockRoom, privatePool: false };
    render(<RoomCard room={roomWithoutPool} />);
    expect(screen.queryByText("Private pool")).not.toBeInTheDocument();
  });

  it("displays discounted price when discount is available", () => {
    render(<RoomCard room={mockRoom} />);
    expect(screen.getByText("€400")).toBeInTheDocument();
    expect(screen.getByText("€500")).toBeInTheDocument();
  });

  it("shows regular price when no discount is available", () => {
    const roomWithoutDiscount = { ...mockRoom, discount: 0 };
    render(<RoomCard room={roomWithoutDiscount} />);
    expect(screen.getByText("€500")).toBeInTheDocument();
    expect(screen.queryByText("€400")).not.toBeInTheDocument();
  });

  it("includes a view details button with correct link", () => {
    render(<RoomCard room={mockRoom} />);
    const button = screen.getByRole("link", { name: /view details/i });
    expect(button).toHaveAttribute("href", "/rooms/1");
  });
});
