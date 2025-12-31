// Toggle Menu Button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// // Change the background video
// function changeVideo(name) {
//   const bgvideoList = document.querySelectorAll(".bg-video");
//   const trailer = document.querySelectorAll(".trailer");
//   const models = document.querySelectorAll(".model");

//   // Mapping Background Videos
//   bgvideoList.forEach((video) => {
//     video.classList.remove("active");
//     if (video.classList.contains(name)) {
//       video.classList.add("active");
//     }
//   });

//   // Mapping model name
//   models.forEach((model) => {
//     model.classList.remove("active");
//     if (model.classList.contains(name)) {
//       model.classList.add("active");
//     }
//   });

//   // Mapping trailer videos change
//   trailer.forEach((video) => {
//     video.classList.remove("active");
//     if (video.classList.contains(name)) {
//       video.classList.add("active");
//     }
//   });
// }


// // Change the play and pause button on click event
// function togglePlay()
// {
//     const play = document.querySelector('.play');
//     const pause = document.querySelector('.pause');
//     play.classList.toggle('active');
//     pause.classList.toggle('active');
// }

// // Play and Pause functionality
// function pauseVideo() {
//     const bgvideoList = document.querySelectorAll(".bg-video.active");
//     bgvideoList.forEach((video) => {
//         video.pause();
//     });

//     togglePlay();
// }

// function playVideo() {
//   const bgvideoList = document.querySelectorAll(".bg-video.active");
//   bgvideoList.forEach((video) => {
//     video.play();
//   });
    
//     togglePlay();
// }

// const vehicleData = {
//   "mclaren-1": {
//     image: "/images/r01.png",
//     description: `
//       Vaha Mobility R01 is a rugged electric two-wheeler designed for Tier-2 and Tier-3 roads.
//       It features high ground clearance, a reinforced chassis, and low maintenance architecture
//       suitable for daily commuting and utility use.
//     `,
//   },

//   "mclaren-2": {
//     image: "/images/def01.png",
//     description: `
//       DEF01 is a defense-grade electric mobility platform built for harsh terrains and fleet operations.
//       It offers modular components, enhanced load capacity, and extreme durability for field deployment.
//     `,
//   },
// };

const vehicleData = {
  "mclaren-1": {
    image: "/images/R01.avif",
    description: `
      Vaha Mobility R01 is a purpose-built electric two-wheeler engineered for Tier-2 and Tier-3 road conditions. Featuring a reinforced chassis, higher ground clearance, and modular architecture, it ensures durability, low operating cost, and easy serviceability. R01 supports daily commuting, fleet use, and utility applications in challenging terrains.
    `,
  },

  "mclaren-2": {
    image: "/images/DEF01.avif",
    description: `
      Vaha Mobility DEF01 is a defense-grade electric two-wheeler engineered for silent operations and extreme terrain. It features a reinforced chassis, low heat and noise signature, and modular interfaces for anti-drone systems, surveillance payloads, and tactical equipment—enabling reliable patrolling, rapid response, and multi-mission adaptability.
    `,
  },
};


function changeVehicle(name) {
  /* 1. Change model name (already working logic reused) */
  document.querySelectorAll(".model").forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  /* 2. Change main vehicle image */
  const imageElement = document.getElementById("vehicleImage");
  if (imageElement && vehicleData[name]) {
    imageElement.src = vehicleData[name].image;
  }

  /* 3. Change description paragraph */
  const descElement = document.getElementById("vehicleDescription");
  if (descElement && vehicleData[name]) {
    descElement.innerHTML = vehicleData[name].description;
  }

}

