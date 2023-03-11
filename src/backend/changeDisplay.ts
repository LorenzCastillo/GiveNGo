export function changeDisplay() {
    document.getElementById("mobileContent")?.classList.remove("hidden");
    document.getElementById("mobileContent")?.classList.add("flex");

    document.getElementById("exitIcon")?.classList.remove("hidden");
    document.getElementById("exitIcon")?.classList.add("flex");

    document.getElementById("hamburgerIcon")?.classList.remove("flex");
    document.getElementById("hamburgerIcon")?.classList.add("hidden");

    document.getElementById("navbarChange")?.classList.remove("absolute");
    document.getElementById("navbarChange")?.classList.add("fixed");

    document.getElementById("navbarBackground")?.classList.add("bg-custom-dark_grey");
}

export function revertDisplay() {
    document.getElementById("mobileContent")?.classList.remove("flex");
    document.getElementById("mobileContent")?.classList.add("hidden");

    document.getElementById("exitIcon")?.classList.remove("flex");
    document.getElementById("exitIcon")?.classList.add("hidden");

    document.getElementById("hamburgerIcon")?.classList.remove("hidden");
    document.getElementById("hamburgerIcon")?.classList.add("flex");

    document.getElementById("navbarChange")?.classList.remove("fixed");
    document.getElementById("navbarChange")?.classList.add("absolute");

    document.getElementById("navbarBackground")?.classList.remove("bg-custom-dark_grey");
}