"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterOptions = [
  { filter: "all", label: "All rooms" },
  { filter: "small", label: "1—2 guests" },
  { filter: "medium", label: "3—4 guests" },
  { filter: "large", label: "5—8 guests" },
];

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("capacity");

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.push(pathname + "?" + params.toString(), { scroll: false });
  };

  return (
    <div className="flex">
      {filterOptions.map(({ filter, label }) => (
        <FilterButton
          key={filter}
          filter={filter}
          handleFilter={handleFilter}
          isActive={currentFilter === filter}
        >
          {label}
        </FilterButton>
      ))}
    </div>
  );
}

type FilterButtonProps = {
  filter: string;
  handleFilter: (filter: string) => void;
  isActive: boolean;
  children: string;
};

function FilterButton({
  filter,
  handleFilter,
  isActive,
  children,
}: FilterButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={cn("px-5 py-2 uppercase", {
        "text-accent-400": isActive,
      })}
    >
      {children}
    </button>
  );
}

export default Filter;
