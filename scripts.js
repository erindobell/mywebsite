const navProjects = document.querySelectorAll('.nav-project')
const main = document.querySelector('main') 
const body = document.querySelector('body')

for (let i = 0; i < navProjects.length; i++) {
  navProjects[i].addEventListener('click', function() {
    selectProject(i)
    body.classList.add('project-active')
  })
}

function selectProject(x) {
  if (document.querySelector('.nav-project.active')) {
    document.querySelector('.nav-project.active').classList.remove('active')
  }
  navProjects[x].classList.add('active')
  if (navProjects[x].querySelector('.project')) {
    let projectDetail = navProjects[x].querySelector('.project').innerHTML
    main.innerHTML = `
      <div class="close-project"><img src="images/close-icon.svg" alt="close"></div>
      <div class="project">${projectDetail}</div>
    `;
    document.querySelector('.close-project').addEventListener('click', function() {
      body.classList.remove('project-active')
      main.innerHTML = ''
    })
  }
}

selectProject(0)

window.addEventListener('resize', function() {
  document.querySelector('html').scrollTo(0,0)
})





function toggleOverlay() {
  var overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
  }
}


function toggleNewOverlay() {
  var newOverlay = document.getElementById('newOverlay');
  if (newOverlay) {
      newOverlay.style.display = (newOverlay.style.display === 'block') ? 'none' : 'block';
  }
}




















