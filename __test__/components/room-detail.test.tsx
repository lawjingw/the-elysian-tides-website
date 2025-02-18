import { render, screen } from "@testing-library/react";
import RoomDetail from "@/components/room-detail";

describe("RoomDetail", () => {
  const mockRoom = {
    id: 1,
    name: "Luxury Suite",
    description: "A beautiful suite with ocean view",
    maxCapacity: 4,
    bedTypes: "1 King Bed",
    roomSize: 50,
    privatePool: true,
    images: ["/image1.jpg"],
    regularPrice: 300,
    discount: 0,
  };

  it("renders room details correctly", () => {
    render(<RoomDetail room={mockRoom} />);

    expect(screen.getByText("Luxury Suite")).toBeInTheDocument();
    expect(
      screen.getByText(/beautiful suite with ocean view/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/50/)).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
  });

  it("displays room amenities correctly", () => {
    render(<RoomDetail room={mockRoom} />);

    expect(screen.getByText("1 King Bed")).toBeInTheDocument();
    expect(screen.getByText(/50/)).toBeInTheDocument();
    expect(screen.getByText("Private pool")).toBeInTheDocument();
  });

  it("displays occupancy information", () => {
    render(<RoomDetail room={mockRoom} />);

    expect(screen.getByText(/for up to/i)).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText(/guests/i)).toBeInTheDocument();
  });
});
