// 3rd Party Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
// Local Imports
import BackgroundImage from "@/components/backgroundComponent";
import Couch from "@/images/Couch.png";
import Navbar from "@/components/navbarComponent";
import { IItem } from "@/interface/Item";

interface Item {
    name: string
    location: string
}

export default function ViewItemPage() {
    const [name, setItemName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [image, setImage] = useState("");
    const [index, setIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let userData: IItem[] = [];
        let dummyData: IItem[] = [];
        let itemToView: Item = {} as Item;
        if(sessionStorage.getItem("viewItem")) {
            itemToView = JSON.parse(sessionStorage.getItem("viewItem") ?? "");
        }
        if(localStorage.getItem("userData")) {
            userData = JSON.parse(localStorage.getItem("userData") ?? "");
        }
        if(localStorage.getItem("dummyData")) {
            dummyData = JSON.parse(localStorage.getItem("dummyData") ?? "");
        }
        let arr = userData.concat(dummyData);
        let viewData: IItem = {} as IItem;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].name == itemToView.name && arr[i].location == itemToView.location) {
                console.log(arr[i]);
                console.log(itemToView);
                viewData = arr[i];
            }
        }
        setItemName(viewData.name);
        setLocation(viewData.location);
        setCategory(viewData.category);
        setDescription(viewData.description);
        setContact(viewData.contact);
        setImage(viewData.image);
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
                <Navbar/>
                <h1 className="select-none font-lato-bold text-white text-3xl drop-shadow-lg mt-8 ml-[15%]">Viewing Item</h1>
                <div className="flex flex-col xl:flex-row">
                    <div className="grid grid-flow-rows h-[36rem] w-auto xl:w-80 rounded-xl border-4 border-custom-dark_grey bg-custom-grey ml-[15%] mr-[15%] xl:mr-[0%] mt-4 overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-grey-300">
                        <div className="select-none m-4">
                            <h1 className="text-xl font-bold text-white">Item Name</h1>
                            <p className="text-md text-white">{name}</p>
                        </div>

                        <div className="border-t-2 border-color-white mx-4"/>

                        <div className="select-none m-4">
                            <h1 className="text-xl font-bold text-white">Location</h1>
                            <p className="text-md text-white">{location}</p>
                        </div>

                        <div className="border-t-2 border-color-white mx-4"/>

                        <div className="select-none m-4">
                            <h1 className="text-xl font-bold text-white">Categories</h1>
                            <p className="text-md text-white">{category}</p>
                        </div>

                        <div className="border-t-2 border-color-white mx-4"/>

                        <div className="select-none m-4 mb-6">
                            <h1 className="text-xl font-bold text-white">Description</h1>
                            <p className="text-md text-white">{description}</p>
                        </div>

                        <div className="border-t-2 border-color-white mx-4"/>

                        <div className="m-4 mb-6">
                            <h1 className="text-xl font-bold text-white">Contact Email</h1>
                            <p className="text-md text-white">{contact}</p>
                        </div>
                    </div>

                    <div className="xl:h-[36rem] xl:w-[50rem] rounded-xl bg-custom-grey ml-[15%] mr-[15%] xl:ml-4 mt-4 overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-grey-300">
                        <Image
                            src={image}
                            alt=" "
                            style={{ ...(imageLoaded ? {} : { display:"none" }) }}
                            onLoadingComplete={()=>{ setImageLoaded(true); }}
                            className="h-full w-full object-cover"
                            width={2500}
                            height={2500}
                            unoptimized={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}