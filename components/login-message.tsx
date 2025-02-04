import Link from "next/link";

function LoginMessage() {
  return (
    <div className="flex w-full items-center justify-center">
      <p className="self-center py-12 text-center text-xl">
        Please{" "}
        <Link href="/login" className="text-accent-500 underline">
          login
        </Link>{" "}
        to reserve this
        <br /> room right now
      </p>
    </div>
  );
}

export default LoginMessage;
