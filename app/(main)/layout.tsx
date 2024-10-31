import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full flex flex-col bg-black/60">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;