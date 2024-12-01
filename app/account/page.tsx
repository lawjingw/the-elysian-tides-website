import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

function Page() {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">Account</h2>
    </div>
  );
}

export default Page;
