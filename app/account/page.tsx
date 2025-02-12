import { getCurrentUser } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const user = await getCurrentUser();
  const displayName = user?.user_metadata.fullName.split(" ")[0];

  return (
    <div className="mb-8 text-center sm:mb-12 md:mb-16">
      <h2 className="mb-3 font-serif text-2xl tracking-[-0.02em] sm:mb-4 sm:text-3xl md:text-[2.5rem]">
        Welcome, {displayName}
      </h2>
      <p className="text-base text-zinc-600 sm:text-lg">
        Manage your detail and reservations at The Elysian Tides
      </p>
    </div>
  );
}

export default Page;
