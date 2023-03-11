import router from "next/router";
import { useEffect } from "react";

export default function ReloadSaved() {
    useEffect(() => {
        router.push("/savedItemsPage");
    }, []);
}