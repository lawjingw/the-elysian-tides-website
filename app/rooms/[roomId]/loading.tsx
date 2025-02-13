import Spinner from "@/components/spinner";

function loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
