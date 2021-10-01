let AboutSection = document.getElementById("about");
let PortfolioSection = document.getElementById("portfolio");
let FluffSection = document.getElementById("fluff");
let ContactSection = document.getElementById("contact");
let Title = document.getElementById("title");

// this can definitely be re-written better
function SetVisibleSection(SectionToSet) {
    Title.style.marginTop = "0";
    switch(SectionToSet) {
        case "about":
            if (AboutSection.style.display != "inline"){
                AboutSection.style.display = "inline";
                PortfolioSection.style.display = "none";
                FluffSection.style.display = "none";
                ContactSection.style.display = "none";
            }
            else {
                SetVisibleSection(null);
            }
            break;
        case "portfolio":
            if (PortfolioSection.style.display != "inline") {
                AboutSection.style.display = "none";
                PortfolioSection.style.display = "inline";
                FluffSection.style.display = "none";
                ContactSection.style.display = "none";
            }
            else {
                SetVisibleSection(null);
            }
            break;
        case "fluff":
            if (FluffSection.style.display != "inline") {
                AboutSection.style.display = "none";
                PortfolioSection.style.display = "none";
                FluffSection.style.display = "inline";
                ContactSection.style.display = "none";
            }
            else {
                SetVisibleSection(null);
            }
            break;
        case "contact":
            if (ContactSection.style.display != "inline") {
                AboutSection.style.display = "none";
                PortfolioSection.style.display = "none";
                FluffSection.style.display = "none";
                ContactSection.style.display = "inline";
            }
            else {
                SetVisibleSection(null);
            }
            break;
        default:
            AboutSection.style.display = "none";
            PortfolioSection.style.display = "none";
            FluffSection.style.display = "none";
            ContactSection.style.display = "none";
            Title.style.marginTop = "60px";
            break;
    }
}