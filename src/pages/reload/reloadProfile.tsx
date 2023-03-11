import router from "next/router";
import { useEffect } from "react";

export default function ReloadProfile() {
    useEffect(() => {
        router.push("/profilePage");
    }, []);
}