// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const skills = [
  { name: "HTML & CSS", color: "#fca61f", percentage: 95 },
  { name: "JavaScript", color: "#6f34fe", percentage: 90 },
  { name: "ReactJS", color: "#3f396d", percentage: 85 },
  { name: "Node.js", color: "#20c997", percentage: 80 },
  { name: "Python", color: "#092e20", percentage: 82 },
  { name: "FastAPI", color: "#009688", percentage: 80 },
  { name: "TensorFlow", color: "#ff6f00", percentage: 75 },
  { name: "PyTorch", color: "#e91e63", percentage: 78 },
  { name: "AWS", color: "#ff9900", percentage: 85 },
  { name: "Docker", color: "#0db7ed", percentage: 88 },
  { name: "Kubernetes", color: "#326ce5", percentage: 84 },
  { name: "Git", color: "#f1502f", percentage: 90 }
];

let currentIndex = 0;

function updateSkills() {
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = ""; // Clear existing skills

  const screenWidth = window.innerWidth;
  const skillsPerSet = screenWidth < 768 ? 2 : 4; // Show 2 skills on mobile, 4 on desktop
  const currentSkills = skills.slice(currentIndex, currentIndex + skillsPerSet);

  if (currentSkills.length < skillsPerSet) {
    currentSkills.push(...skills.slice(0, skillsPerSet - currentSkills.length));
  }

  let row;
  currentSkills.forEach((skill, index) => {
    if (index % 2 === 0) {
      row = document.createElement("div");
      row.className = "row justify-content-evenly mt-4";
      skillsContainer.appendChild(row);
    }

    const skillCard = document.createElement("div");
    skillCard.className = "col-10 col-md-5";
    skillCard.innerHTML = `
      <div class="progress-card ms-3 ms-md-0">
        <div class="circular-progress" style="background: conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #ededed 0deg);">
          <span class="progress-value">${skill.percentage}%</span>
        </div>
        <br />
        <span class="text">${skill.name}</span>
      </div>
    `;
    row.appendChild(skillCard);
  });

  currentIndex = (currentIndex + skillsPerSet) % skills.length; // Rotate skills
}

// Initial call and update every 2 seconds
updateSkills();
setInterval(updateSkills, 2000);

// Adjust skill count on window resize
window.addEventListener("resize", updateSkills);