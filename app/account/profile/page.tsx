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
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>
      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest!} countries={countries} />
    </div>
  );
}

export default Page;
