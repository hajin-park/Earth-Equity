import HeroSection from "./HeroSection";
import TutorialSection from "./TutorialSection";

const Home = () => {
    return (
        <div className="bg-white px-6 py-10 lg:px-8">
            <HeroSection />
            <TutorialSection />
        </div>
    );
};

export default Home;
