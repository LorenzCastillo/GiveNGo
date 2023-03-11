// 3rd Party Imports
import Image from "next/image";
// Local Imports
import backgroundImage from "@/images/Background.png";

export default function BackgroundImage() {
    return(
        <>
            <div className="relative">
                <div className="fixed">
                    <Image
                        src={backgroundImage}
                        className="w-screen min-w-max h-screen min-h-screen bg-center t-10 bottom-2"
                        alt="Hamburger Icon"
                        unoptimized={true}
                    />
                </div>
            </div>
        </>
    );
}