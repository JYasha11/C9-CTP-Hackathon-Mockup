import Amazon from "../assets/companies/amazon.png"
import Google from "../assets/companies/google.png"
import Twitch from "../assets/companies/twitch.png"

const Sponsors = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-24 mb-24">
            <div className="text-justify max-w-2xl">
                <h1 className="text-center text-4xl font-extrabold mb-8">Special Thanks to Our Sponsors:</h1>
            </div>
            <div className="text-justify grid grid-cols-5 gap-x-28 gap-y-8 mt-16 mb-24">
                <img src={Amazon} alt="" className="h-12" />
                <img src={Google} alt="" className="h-12" />
                <img src={Twitch} alt="" className="h-12" />
                <img src={Amazon} alt="" className="h-12" />
                <img src={Google} alt="" className="h-12" />
                <img src={Twitch} alt="" className="h-12" />
                <img src={Amazon} alt="" className="h-12" />
                <img src={Google} alt="" className="h-12" />
                <img src={Twitch} alt="" className="h-12" />
                <img src={Amazon} alt="" className="h-12" />
            </div>
            <div className="text-justify max-w-lg">
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                    Would you like to get yourself or your company involved in a future hackathon or other CUNY Tech Prep initiatives? Reach out to
                    <span className="underline"> volunteer@cunytechprep.org</span>
                </p>
            </div>
        </div>
    );
};

export default Sponsors;
