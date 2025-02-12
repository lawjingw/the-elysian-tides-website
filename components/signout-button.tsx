import { signOut } from "@/lib/actions";
import { LogOut } from "lucide-react";

function SignOutButton() {
  return (
    <form action={signOut}>
      <button className="w-full px-5 py-3 font-semibold text-zinc-400 transition-colors hover:bg-zinc-950 hover:text-white min-[950px]:flex min-[950px]:items-center min-[950px]:gap-4">
        <LogOut className="h-5 w-5" />
        <span className="hidden min-[950px]:block">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
