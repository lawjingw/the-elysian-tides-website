import UpdateProfileForm from "@/components/update-profile-form";
import { getCountries, getCurrentUser, getGuest } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update profile",
};

async function Page() {
  const currentUser = await getCurrentUser();
  const guest = await getGuest(currentUser!.email!);
  const countries = await getCountries();

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-serif text-[2.5rem] tracking-[-0.02em]">
          UPDATE YOUR PROFILE
        </h2>
        <p className="text-lg text-zinc-600">
          Please provide your details to enhance your check-in experience at The
          Elysian Tides
        </p>
      </div>

      <UpdateProfileForm guest={guest!} countries={countries} />
    </div>
  );
}

export default Page;
