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
    <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:mb-12 lg:mb-16">
        <h2 className="mb-3 font-serif text-2xl tracking-[-0.02em] sm:text-3xl lg:text-[2.5rem]">
          UPDATE YOUR PROFILE
        </h2>
        <p className="text-base text-zinc-600 sm:text-lg">
          Please provide your details to enhance your check-in experience at The
          Elysian Tides
        </p>
      </div>

      <UpdateProfileForm guest={guest!} countries={countries} />
    </div>
  );
}

export default Page;
