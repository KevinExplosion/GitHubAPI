var displayGit = require('./../js/gitHub.js').displayGit;
var displayRepos = require('./../js/gitHub.js').displayRepos;


$(document).ready(function() {
  $('#searchButton').click(function(event) {
    event.preventDefault();

    var gitName = $('#searchGit').val();
    displayGit(gitName);
    displayRepos(gitName);
  });
});
