let PreviewImg = document.getElementById("preview");

function ShowPreview(gallery) {
    switch (gallery) {
        case "japan":
            PreviewImg.style.background = 'center / contain no-repeat url("../../res/imgs/loading.gif")';
            PreviewImg.src = "../../fluff/photography/photos/japan/DSC_0441.JPG";
            break;
        case "wastetextures":
            PreviewImg.style.background = 'center / contain no-repeat url("../../res/imgs/loading.gif")';
            PreviewImg.src = "../../fluff/photography/photos/wastetextures/IMG_20200115_111902.jpg";
            break;
        case "ukscenes":
            PreviewImg.style.background = 'center / contain no-repeat url("../../res/imgs/loading.gif")';
            PreviewImg.src = "../../fluff/photography/photos/ukscenes/PXL_20210309_141318115.jpg";
            break;
        case "lockdown":
            PreviewImg.style.background = 'center / contain no-repeat url("../../res/imgs/loading.gif")';
            PreviewImg.src = "../../fluff/photography/photos/lockdown/PXL_20210127_040718300.jpg";
            break;
        case "misc":
            PreviewImg.style.background = 'center / contain no-repeat url("../../res/imgs/loading.gif")';
            PreviewImg.src = "../../fluff/photography/photos/misc/PXL_20210529_145914752.jpg";
            break;
        default:
            PreviewImg.src = "../../res/imgs/none.png";
            PreviewImg.style.background = 'url("../../res/imgs/none.png") no-repeat 0 0';
            break;
    }
}