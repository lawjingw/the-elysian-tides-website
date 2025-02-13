import SideNavigation from "../../components/side-navigation";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[4rem_1fr] md:gap-12 min-[950px]:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}

export default layout;
