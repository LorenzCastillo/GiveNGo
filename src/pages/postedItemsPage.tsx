// 3rd Party Imports
import { useEffect, useState } from "react";
import Head from "next/head";
// Local Imports
import BackgroundImage from "@/components/backgroundComponent";
import Navbar from "@/components/navbarComponent";
import CardComponent from "@/components/cardComponent";
import { IItem } from "@/interface/Item";

export default function PostedItemsPage() {
    const [data, setData] = useState<IItem[]>([]);

    useEffect(() => {
        // Fetch any existing data
        let dummyData = [];
        let userData = [];
        if (localStorage.getItem("dummyData")) {
            dummyData = JSON.parse(localStorage.getItem("dummyData") ?? "");
        }

        if (localStorage.getItem("userData")) {
            userData = JSON.parse(localStorage.getItem("userData") ?? "");
        }
        let data = dummyData.concat(userData);
        setData(data);
    }, []);

    return(
        <>
            <Head>
                <title>Posted Items | GiveNGo</title>
                <meta name="description" content="Free Items!!!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BackgroundImage/>
            <div id="navbarChange" className="absolute w-screen">
                <Navbar isPostedItemsPage={true}/>
                <div className="flex justify-center">
                    <div className="select-none grid grid-flow-rows md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 mt-8">
                        {
                            data.map((item, i) => (
                                i == 0 ?
                                    <div key={i}>
                                        <h1 className="select-none w-80 font-lato-bold text-white text-3xl drop-shadow-lg mb-4">Recommended Picks</h1>
                                        <CardComponent itemImage={item.image} itemName={item.name} itemLocation={item.location} items={data} index={i} isEditPage={false} isSaved={item.isSaved} isYours={item.isYours}/>
                                    </div> :
                                    <div key={i}>
                                        <h1 className="select-none w-80 font-lato-bold text-white text-3xl drop-shadow-lg text-opacity-0 mb-4">.</h1>
                                        <CardComponent itemImage={item.image} itemName={item.name} itemLocation={item.location} items={data} index={i} isEditPage={false} isSaved={item.isSaved} isYours={item.isYours}/>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}