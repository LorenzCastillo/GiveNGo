// Local Imports
import { IItem } from "@/interface/Item";

export default function loadData() {
    const data: IItem[] = [
        {
            name: "Couch",
            location: "1542 Robson St, Vancouver BC",
            category: "Furniture",
            description: "Giving away this sofa since we're getting a new one",
            image: "https://res.cloudinary.com/saibyouga/Couch_pdzzx2",
            contact: "jandraw@gmail.com",
            isSaved: false,
            isYours: false
        },
        {
            name: "PlayStation 5",
            location: "Moody Park, New Westminster BC",
            category: "Electronics",
            description: "I just got the superior console XBOX-X Series",
            image: "https://res.cloudinary.com/saibyouga/PS5_bhm1eg",
            contact: "000444602@student.vcc.ca",
            isSaved: false,
            isYours: false
        },{
            name: "Table",
            location: "23320 Mavis Ave, Langley BC",
            category: "Furniture",
            description: "I just got a new table, I'd love to give this away!",
            image: "https://res.cloudinary.com/saibyouga/Table_ytcxph",
            contact: "lorenz5524@hotmail.com",
            isSaved: false,
            isYours: false
        },
        {
            name: "T-Shirt",
            location: "3526 Lockhart Road, Richmond BC",
            category: "Clothing",
            description: "Giving away a T-Shirt that I found in the back of my closet! Size M",
            image: "https://res.cloudinary.com/saibyouga/T-shirt_fc8tgy",
            contact: "voncl789@gmail.com",
            isSaved: false,
            isYours: false
        }
    ];
    localStorage.setItem("dummyData", JSON.stringify(data));
}