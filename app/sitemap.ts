import { getRooms } from "@/lib/data-service";
import { MetadataRoute } from "next";

const BASE_URL = process.env.VERCEL_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const roomUrls = await getRoomUrls();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: BASE_URL + "/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/rooms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...roomUrls,
  ];
}

async function getRoomUrls() {
  const rooms = await getRooms();
  return rooms.map((room) => ({
    url: `${BASE_URL}/rooms/${room.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
}
