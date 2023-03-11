import router from "next/router";
import { useEffect } from "react";

export default function ReloadPosted() {
    useEffect(() => {
        router.push("/postedItemsPage");
    }, []);
}