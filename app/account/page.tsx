import { getCurrentUser } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const user = await getCurrentUser();
  const displayName = user?.user_metadata.fullName.split(" ")[0];
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 font-serif text-[2.5rem] tracking-[-0.02em]">
        Welcome, {displayName}
      </h2>
      <p className="text-lg text-zinc-600">
        Manage your detail and reservations at The Elysian Tides
      </p>
    </div>
  );
}

export default Page;
