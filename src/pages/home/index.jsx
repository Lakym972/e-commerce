import HeroBlock from "../../components/hero/HeroBlock.jsx";
import Features from "../../components/features/index.jsx";
import Listing from "../../components/listing/index.jsx";

const HomePage = () => {
    return (
        <div className="m-16">
        <HeroBlock/>
        <Features/>
        <Listing/>
        </div>
    )
}

export default HomePage;