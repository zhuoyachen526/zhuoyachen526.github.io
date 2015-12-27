$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'projects', 'connect'],
    sectionsColor: ['#000000', '#000000', '#330088', '#110099'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Intro', 'About', 'Projects', 'Connect']
  });
  loadCoverPic("#intro");
  document.getElementById("projects-first-img").src = "img/projects_first3.png";
});