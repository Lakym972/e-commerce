import HeroBlock from "../../components/hero/HeroBlock.jsx";
import Features from "../../components/features/index.jsx";
import Listing from "../../components/listing/index.jsx";
import CalculateWithUseReducer from "../../components/calculate/CalculateWithReducer.jsx";

const HomePage = () => {
    return (
        <div className="m-16">
        <CalculateWithUseReducer/>
        <HeroBlock/>
        <Features/>
        <Listing/>
        </div>
    )
}

export default HomePage;