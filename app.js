const countDown = new Date("Oct 16, 2023 00:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
},1000)





// Get the loading container and page content elements
const loadingContainer = document.getElementById('loading-container');
const pageContent = document.querySelector('.ContactUs');

// Wait for 3 seconds (3000 milliseconds)
setTimeout(function () {
  // Hide the loading container
  loadingContainer.style.display = 'none';

  // Show the page content
  pageContent.style.display = 'block';
}, 2000); // 3 seconds