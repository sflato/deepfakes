console.log("working")

window.setInterval(replaceimages, 2000);

replaceimages();

function replaceimages() {
  $(document).ready(function() {
      $('img').attr('src','http://68.183.51.115/chromeexttest/train-30.png')
  });
}
