const yearSpan = document.querySelector('#currentyear');
const updateTime = document.querySelector('#lastModified');
const formatDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium"

});
const currentDate = new Date();
yearSpan.innerText = currentDate.getFullYear();
updateTime.innerText = (formatDate.format(currentDate));



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Manila Philippines",
        location: "Manila,Philippines",
        dedicated: "1984, September, 25-27",
        area: 26683,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-7439.jpg"
      },

      {
        templeName: "Cebu Philippines",
        location: "Cebu City,Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-2257.jpg"
      },

      {
        templeName: "Urdaneta Philippines",
        location: "Urdaneta City,Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874.jpg"
      },



  ];
  let gallery = document.querySelector("#gallery");
  let pageName = document.querySelector('#pageName');
  createTempleCard(temples);
  
  const homeTab = document.querySelector('#home')
  homeTab.addEventListener('click', () => {
      pageName.innerHTML = `Home (All Temples)`;
      createTempleCard(temples)
  });
  
  const oldTab = document.querySelector('#old')
  oldTab.addEventListener('click', () => {
      pageName.innerHTML = `Old Temples (Temples built before 1900)`;
      let oldTemples = temples.filter(temple => temple.dedicated.substring(0, 4) < 1900)
      createTempleCard(oldTemples)
  });
  
  const newTab = document.querySelector('#new')
  newTab.addEventListener('click', () => {
      pageName.innerHTML = `New Temples (Temples built after 2000)`;
      let newTemples = temples.filter(temple => temple.dedicated.substring(0, 4) > 2000)
      createTempleCard(newTemples)
  });
  
  const largeTab = document.querySelector('#large')
  largeTab.addEventListener('click', () => {
      pageName.innerHTML = `Large Temples (Temples larger than 90000 square feet)`;
      let largeTemples = temples.filter(temple => temple.area > 90000)
      createTempleCard(largeTemples)
  });
  
  const smallTab = document.querySelector('#small')
  smallTab.addEventListener('click', () => {
      pageName.innerHTML = `Small Temples (Temples smaller than 10000 square feet)`;
      let smallTemples = temples.filter(temple => temple.area < 10000)
      createTempleCard(smallTemples)
  });
  
  function createTempleCard(filteredTemples) {
      document.querySelector("#gallery").innerHTML = "";
      filteredTemples.forEach((temple) => {
          
          gallery.innerHTML += `<section> 
          <h3>${temple.templeName}</h3>
              <p> Location: ${temple.location} </p>
              <p> Dedicated: ${temple.dedicated} </p> 
              <p> Size: ${temple.area} sq ft</p>
              <img src = ${temple.imageUrl} alt = "${temple.templeName} Temple" loading = "lazy" width = "400" height = "250"</img>
              </section>`
      });
  
  }