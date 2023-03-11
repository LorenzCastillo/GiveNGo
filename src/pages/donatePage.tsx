// 3rd Party Imports
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import router from "next/router";
// Local Imports
import BackgroundImage from "@/components/backgroundComponent";
import Navbar from "@/components/navbarComponent";
import { IItem } from "@/interface/Item";
import photoIcon from "@/images/Photo_Icon.png";
import CardComponent from "@/components/cardComponent";

const categories = [
    {
        label: "Appliances",
        value: "Appliances"
    },
    {
        label: "Baby",
        value: "Baby"
    },
    {
        label: "Beauty & Personal Care",
        value: "Beauty & Personal Care"
    },
    {
        label: "Clothing, shoes & accessories",
        value: "Clothing, shoes & accessories"
    },
    {
        label: "Electronics",
        value: "Electronics"
    },
    {
        label: "Furniture",
        value: "Furniture"
    },
    {
        label: "Gifts & Holidays",
        value: "Gifts & Holidays"
    },
    {
        label: "Home",
        value: "Home"
    },
    {
        label: "Household Supplies & Pantry",
        value: "Household Supplies & Pantry"
    },
    {
        label: "Jewellery & Watches",
        value: "Jewellery & Watches"
    },
    {
        label: "Movies, Music & Books",
        value: "Movies, Music & Books"
    },
    {
        label: "Office, Crafts & Party Supplies",
        value: "Office, Crafts & Party Supplies"
    },
    {
        label: "Outdoor Living",
        value: "Outdoor Living"
    },
    {
        label: "Pets",
        value: "Pets"
    },
    {
        label: "Sports & Rec",
        value: "Sports & Rec"
    },
    {
        label: "Toys",
        value: "Toys"
    },
    {
        label: "Video Games",
        value: "Video Games"
    }
];

export default function DonatePage() {
    const [name, setItemName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [contact, setContact] = useState("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files && event.target.files[0];

        if (image) {
            const reader = new FileReader();
            reader.readAsDataURL(image);

            reader.onload = () => {
                const imageURL = reader.result as string;
                setImage(imageURL);
            };
        }
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setItemName(name);
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const location = event.target.value;
        setLocation(location);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value;
        setCategory(category);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const description = event.target.value;
        setDescription(description);
    };

    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const contact = event.target.value;
        setContact(contact);
    };

    const postItem = () => {
        let items: IItem[] = [];

        // If elements are inside the storage already, fetch them
        if (localStorage.getItem("userData")) {
            items = JSON.parse(localStorage.getItem("userData") ?? "");
        }

        let itemObject = {} as IItem;

        itemObject.name = name;
        itemObject.location = location;
        itemObject.category = category;
        itemObject.description = description;
        itemObject.image = image;
        itemObject.contact = contact;
        itemObject.isSaved = false;
        itemObject.isYours = true;

        items.push(itemObject);
        localStorage.setItem("userData", JSON.stringify(items));
        router.push("/postedItemsPage");
    };

    return (
        <>
            <Head>
                <title>Donate Item | GiveNGo</title>
                <meta name="description" content="Free Items!!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BackgroundImage/>

            <div id="navbarChange" className="absolute w-screen">

                <Navbar isDonatePage={true}/>

                {/* Made a container */}
                <div className="flex flex-row mt-10 w-screen justify-center">
                    {/* Added row inside the container so the content doesn't take up the whole screen */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start w-[90%] justify-center">
                        {/* Added column for the inputs */}
                        <div className="flex flex-col bg-[#313039] border-[#25242B] border-8 rounded-xl w-10/12 lg:w-6/12 mb-4 lg:mr-4">
                            <div className="flex flex-row flex-wrap justify-center">
                                <div className="flex flex-col w-full p-4">
                                    {/* This is where the grid of textfields begin */}
                                    <div className="grid grid-rows-1 grid-cols-2">
                                        <div className="grid grid-rows-2 grid-cols-1 col-span-2 lg:col-span-1 lg:mr-2">
                                            <div className="row-span-1 col-span-1">
                                                <label className="select-none text-white">Item Name</label>
                                                <input type="text" onChange={handleNameChange} className="p-2 w-full bg-white text-black border-slate-400" placeholder="" required/>
                                            </div>

                                            <div className="row-span-1 col-span-1">
                                                <label className="select-none text-white">Location</label>
                                                <input type="text" onChange={handleLocationChange} className="p-2 w-full bg-white text-black border-slate-400" placeholder="" required/>
                                            </div>
                                        </div>
                                        <div className="row-span-2 col-span-2 lg:col-span-1 lg:ml-2">
                                            <label className="select-none text-white">Description</label>
                                            <textarea rows={4} onChange={handleDescriptionChange} className="p-2 w-full bg-white text-black border-slate-400 resize-none" placeholder="" required/>
                                        </div>
                                    </div>

                                    <div className="grid grid-rows-1 grid-cols-2">
                                        <div className="col-span-2 lg:col-span-1 lg:mr-2">
                                            <label className="select-none text-white">Category</label>
                                            <select onChange={(e) => setCategory(e.target.value)} className="p-2 w-full bg-white text-black border-slate-400">
                                                <option>Select a category</option>
                                                {categories.map((selectedCategory, i) => (
                                                    <option key={i} value={selectedCategory.value}>{selectedCategory.label}</option>
                                                ))}
                                            </select>

                                            {/* <input type="text" onChange={handleCategoryChange} className="p-2 w-full bg-white text-black border-slate-400" placeholder="" required/> */}
                                        </div>
                                        <div className="col-span-2 lg:col-span-1 lg:ml-2">
                                            <label className="select-none text-white">Your Email</label>
                                            <input type="text" onChange={handleContactChange} className="p-2 w-full bg-white text-black border-slate-400" placeholder="" required/>
                                        </div>
                                    </div>

                                    <div className="grid grid-rows-1 grid-cols-2">
                                        <div className="select-none flex flex-col w-full mt-4 col-span-2 lg:col-span-1">
                                            <div className="select-none lg:mr-2">
                                                <input type="file" id="upload" onChange={handleImageChange} hidden required/>

                                                {image ? (
                                                    <label htmlFor="upload" className="cursor-pointer">
                                                        <div className="h-60 bg-white">
                                                            <div className="flex w-full h-full items-center justify-center">
                                                                <Image
                                                                    src={image}
                                                                    alt="Selected Image"
                                                                    className="h-full w-full object-cover"
                                                                    width={200}
                                                                    height={200}
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                ): (
                                                    <label htmlFor="upload" className="cursor-pointer">
                                                        <div className="h-60 bg-white">
                                                            <div className="flex w-full h-full items-center justify-center">
                                                                <Image
                                                                    src={photoIcon}
                                                                    alt="Camera Icon"
                                                                    className="h-32"
                                                                    width={120}
                                                                    height={120}
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                )}
                                            </div>
                                        </div>

                                        <div className="relative w-full ml-2 col-span-2 lg:col-span-1 mt-20">
                                            <div className="absolute bottom-0 right-0 mr-2">
                                                <button type="submit" onClick={() => postItem()} className="w-24 px-4 py-2 mt-8 rounded-2xl text-xl bg-gradient-to-r from-custom-post_button_left to-custom-post_button_right">POST</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column for the preview item */}
                        <div>
                            <h1 className="select-none font-lato-bold text-white text-3xl drop-shadow-lg mb-4 underline underline-offset-8">Preview</h1>
                            <CardComponent itemName={name} itemLocation={location} itemImage={image} items={[]} index={0} isSaved={false} isYours={true} isEditPage={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}