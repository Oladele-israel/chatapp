import HomeHero from "../components/HomeComponent/HomeHero.jsx";
import HomeSummary from "../components/HomeComponent/HomeSummary.jsx";

const Home = () => {
  return (
    <section className="p-3  w-full">
      <HomeHero />
      <HomeSummary />
    </section>
  );
};

export default Home;
