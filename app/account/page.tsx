import { getCurrentUser } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const user = await getCurrentUser();
  const displayName = user?.user_metadata.fullName.split(" ")[0];
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Welcome, {displayName}
      </h2>
    </div>
  );
}

export default Page;
