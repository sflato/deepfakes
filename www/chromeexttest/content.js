console.log("working")


replaceimages();

chrome.extension.getURL('train-30.png')

function replaceimages() {
  $(document).ready(function() {
      $('img').attr('src','train-30.png')
  });
}
