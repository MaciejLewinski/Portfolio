const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

// IMG VIEWER IN GALLERY

// const options = {
// 	keyboard: true,
// 	size: 'fullscreen'
// };

// document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	const lightbox = new Lightbox(el, options);
// 	lightbox.show();
// }));


// INSTAGRAM FEED APP

// let userFeed = new Instafeed({
//     get: 'user',
//     target: "instafeed-container",
//     resolution: 'low_resolution',
//     // Limit pokazywanych Feedsów 
//     limit: 4,    
//     accessToken: 'IGQVJXXzIzbHUzcVVVd3BDY19XUjlMS215dTZANeGhJUFRWQzZAwYlVXUi1rMlpPanZAPcUtsLXNTeUJIUWlQSUJzM194YXlmUUVMZA3d4SVRITU02aktDTFdPaVZAGdzVISGJuNy1HcWctZAlZALS2xndXBKeQZDZD'
// });

// userFeed.run()
// // console.log(userFeed);




// let userFeedSnd = new Instafeed({
//     get: 'user',
//     target: "instafeed-container-snd",
//     resolution: 'low_resolution',
//     // Limit pokazywanych Feedsów 
//     limit: 8,
//     template: "<a id=\"nextInsta\" href=\"{{link}}\"><img title=\"{{caption}}\" src=\"{{image}}\" /></a>",
//     accessToken: 'IGQVJXMEUyWXFfMmJ6Vm9uU2F4TDdwdmFud3dnQi1zQ1pDMXBrSGt6N21PZA2N1R3JUTm5oMUJ0cEZAZAaU16bm9peGZATQzFsWlhIR0tDandoSTZAnSk1ZALVM1MHlMdnFUMDhTWnZAuUTRZAYjMtNzhSd2xiVQZDZD'
// });

// userFeedSnd.run()
// console.log(userFeedSnd);

// const element = document.getElementById("instafeed-container-snd");
// console.log(element);
// element.remove();

// let i = 0
// do {
//     // i += 0;
//     element.remove();
// } while (i <= 4);

// for ( const i = 0, len = nextInstaRemove.lenght; i < len; i++) {
//     nextInstaRemove[i].remove();
// }

