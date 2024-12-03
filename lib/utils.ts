import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { countries } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries: countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}
