import { render, screen } from "@testing-library/react";
import RoomList from "@/components/room-list";
import { vi } from "vitest";

vi.mock("@/lib/data-service", () => ({
  getRooms: vi.fn().mockResolvedValue([
    { id: 1, name: "Single Room", maxCapacity: 2, price: 100 },
    { id: 2, name: "Double Room", maxCapacity: 4, price: 200 },
    { id: 3, name: "Suite", maxCapacity: 6, price: 300 },
  ]),
}));

describe("RoomList", () => {
  it("renders all rooms when filter is 'all'", async () => {
    render(<RoomList filter="all" />);

    expect(await screen.findByText("Single Room")).toBeInTheDocument();
    expect(await screen.findByText("Double Room")).toBeInTheDocument();
    expect(await screen.findByText("Suite")).toBeInTheDocument();
  });

  it("filters small rooms correctly", async () => {
    render(<RoomList filter="small" />);

    expect(await screen.findByText("Single Room")).toBeInTheDocument();
    expect(screen.queryByText("Double Room")).not.toBeInTheDocument();
    expect(screen.queryByText("Suite")).not.toBeInTheDocument();
  });

  it("filters medium rooms correctly", async () => {
    render(<RoomList filter="medium" />);

    expect(screen.queryByText("Single Room")).not.toBeInTheDocument();
    expect(await screen.findByText("Double Room")).toBeInTheDocument();
    expect(screen.queryByText("Suite")).not.toBeInTheDocument();
  });

  it("filters large rooms correctly", async () => {
    render(<RoomList filter="large" />);

    expect(screen.queryByText("Single Room")).not.toBeInTheDocument();
    expect(screen.queryByText("Double Room")).not.toBeInTheDocument();
    expect(await screen.findByText("Suite")).toBeInTheDocument();
  });
});
