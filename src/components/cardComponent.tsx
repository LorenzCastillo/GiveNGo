// 3rd Party Imports
import Image from "next/image";
import router from "next/router";
// Local Imports
import heartIcon from "@/images/Heart_Icon.png";
import whiteHeartIcon from "@/images/Heart_Icon_White.png";
import deleteIcon from "@/images/Delete_Icon.png";
import editIcon from "@/images/Edit_Icon.png";
import { IItem } from "@/interface/Item";
import { useState } from "react";

interface Props {
    itemName: string,
    itemLocation: string,
    itemImage: string,
    items: IItem[],
    index: number,
    isSaved: boolean,
    isYours: boolean,
    isEditPage: boolean,
    isEdit?: boolean
};

export default function CardComponent(props: Props) {
    const [isSaved, setIsSaved] = useState(props.isSaved);

    const deleteItem = (items: IItem[], index: number) => {
        items.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(items));
        router.push("/reload/reloadProfile");
    };

    const saveIndexAndChangePage = (index: number) => {
        localStorage.setItem("Index", JSON.stringify(index));
        router.push("#");
    };

    const saveItem = (props: Props) => {
        if(props.isYours) {
            return;
        }
        if (isSaved) {
            return;
        }
        let savedData = [];
        if (localStorage.getItem("savedData")) {
            savedData = JSON.parse(localStorage.getItem("savedData") ?? "");
        }
        props.items[props.index].isSaved = true;
        savedData.push(props.items[props.index]);
        localStorage.setItem("savedData", JSON.stringify(savedData));

        // update dummy data
        let dummyData = [];
        if (localStorage.getItem("dummyData")) {
            dummyData = JSON.parse(localStorage.getItem("dummyData") ?? "");
        }
        dummyData[props.index].isSaved = true;
        setIsSaved(true);
        localStorage.setItem("dummyData", JSON.stringify(dummyData));
    };
    const unsaveItem = (props: Props) => {
        if (!isSaved) {
            return;
        }
        let savedData = [];
        if (localStorage.getItem("savedData")) {
            savedData = JSON.parse(localStorage.getItem("savedData") ?? "");
        }
        for(let i = 0; i < savedData.length; i++) {
            if(savedData[i].name == props.itemName && savedData[i].isSaved == isSaved) {
                savedData.splice(i, 1);
                localStorage.setItem("savedData", JSON.stringify(savedData));
            }
        }

        // update dummy data
        let dummyData = [];
        if (localStorage.getItem("dummyData")) {
            dummyData = JSON.parse(localStorage.getItem("dummyData") ?? "");
        }
        for(let i = 0; i < dummyData.length; i++) {
            if(dummyData[i].name == props.itemName && dummyData[i].isSaved == isSaved) {
                dummyData[i].isSaved = false;
                localStorage.setItem("dummyData", JSON.stringify(dummyData));
                setIsSaved(false);
            }
        }
        router.push("/reload/reloadSaved");

    };
    const editItem = (props: Props) => {
        sessionStorage.setItem("editIndex", JSON.stringify(props.index));
        router.push("/editPage");
    };
    const viewItem = (props: Props) => {
        const viewItem = { name: props.itemName, location: props.itemLocation };
        sessionStorage.setItem("viewItem", JSON.stringify(viewItem));
        router.push("/viewItemPage");
    };
    const checkRightButton = (props: Props) => {
        if(props.isEditPage) {
            editItem(props);
        } else if (props.isSaved) {
            if (!props.isEdit) {
                unsaveItem(props);
            }
        } else if (!props.isSaved) {
            saveItem(props);
        } else {
            console.log("invalid props");
        }
    };

    return (
        <>
            <div className="w-80 h-96 bg-custom-grey rounded-2xl shadow-lg">
                <div className="flex flex-col">
                    <div className="flex">
                        <button onClick={() => viewItem( props )}>
                            <Image
                                src={ props.itemImage }
                                alt=" "
                                className="h-52 rounded-t-2xl object-cover"
                                width={2500}
                                height={2500}
                                unoptimized={true}
                            />
                        </button>
                    </div>
                    <div className="px-4 pb-4 pt-2">
                        <div className="flex">
                            <h1 className="font-lato-bold text-white tracking-wide text-2xl line-clamp-1">
                                <button onClick={() => viewItem( props )} className="hover:underline underline-offset-4">
                                    { props.itemName }
                                </button>
                            </h1>
                        </div>

                        <div className="flex mb-10 h-12">
                            <p className="font-lato-bold text-white line-clamp-2">
                                { props.itemLocation }
                            </p>
                        </div>

                        <div className="flex flex-row">
                            <div className="flex-1">
                                {(() => {
                                    if (!props.isEditPage) {
                                        return (
                                            <button onClick={() => deleteItem( props.items, props.index )} className="hidden">
                                                <Image
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    width={30}
                                                    height={30}
                                                />
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button onClick={() => deleteItem( props.items, props.index )} className="">
                                                <Image
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    width={30}
                                                    height={30}
                                                />
                                            </button>
                                        );
                                    }
                                })()}
                            </div>

                            <div>
                                <button className="py-1 bg-custom-green rounded-lg mr-2" onClick={()=>{checkRightButton(props);}}>
                                    {(() => {
                                        if (props.isEditPage) {
                                            return (
                                                <Image
                                                    src={editIcon}
                                                    alt="Edit Icon"
                                                    width={30}
                                                    height={30}
                                                />
                                            );
                                        } else {

                                            if (isSaved) {
                                                return (
                                                    <Image
                                                        src={whiteHeartIcon}
                                                        alt="White Heart Icon"
                                                        width={30}
                                                        height={30}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <Image
                                                        src={heartIcon}
                                                        alt="Heart Icon"
                                                        width={30}
                                                        height={30}
                                                    />
                                                );
                                            }
                                        }
                                    })()}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}