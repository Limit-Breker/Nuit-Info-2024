import HeaderAccueil from "../../components/header_footer/headerAccueil";
import ParallaxOcean from "../../components/ParallaxOcean";

const Port: React.FC = () => {

    return (
        <div className="flex-col flex items-center justify-start  overflow-x-hidden relative w-">
            <HeaderAccueil/>
            <div
                className="w-[100vw] h-[100vh] bg-cover bg-center"
                style={{backgroundImage: "url('port.png')"}}
            >
                Your content here
            </div>
        </div>

    );
};
export default Port;