import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <section>
        <Profile />
      </section>
    </div>
  );
}
