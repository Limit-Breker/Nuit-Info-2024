import ListePerso from "./liste_perso";
import ParallaxOcean from "../../components/ParallaxOcean";
import HeaderAccueil from "../../components/header_footer/headerAccueil";

const Credit: React.FC = () => {
    return (
        <div className="flex-col flex items-center justify-start w-full max-w-[100vw] overflow-x-hidden relative">
            <HeaderAccueil />

            <ParallaxOcean isFixBoat />
            <ListePerso></ListePerso>
        </div>
    );
};
export default Credit;