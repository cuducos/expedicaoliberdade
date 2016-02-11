// Checks if a DOM element `element` (DOM element) has only one child and if
// this child has `needed` (string) as tag name.
var has_only_this_child = function (element, needed) {
  var children = element.childNodes.length;
  if (children === 1) {
    var tag = element.childNodes[0].tagName;
    if (tag) {
      if (tag.toLowerCase() === needed) {
        return true;
      }
    }
  }
  return false;
};

// Add captions to image (by using the `alt` attr)
var add_image_caption  = function (image) {
  var caption = document.createElement('span');
  caption.setAttribute('class', 'caption');
  caption.innerHTML = image.getAttribute('alt');
  image.parentNode.appendChild(caption);
};

// Center images in article tag, and add caption if the image is not a link
// (adds a `image` class to all paragraphs that have only an image tag as
// child; or to ones that have only a anchor tag with only an image inside)
var format_images_in_articles = function () {
  var articles = document.getElementsByTagName('article');
  for (i = 0; i < articles.length; i++) {
    var article = articles[i];
    var paragraphs = article.getElementsByTagName('p');
    for (j = 0; j < paragraphs.length; j++) {
      var paragraph = paragraphs[j];
      var add_class = false;
      if (has_only_this_child(paragraph, 'img')) {
        add_image_caption(paragraph.childNodes[0]);
        add_class = true;
      } else if (has_only_this_child(paragraph, 'a')) {
        if (has_only_this_child(paragraph.childNodes[0], 'img')) {
          add_class = true;
        }
      }
      if (add_class === true) {
        paragraph.setAttribute('class', 'image');
      }
    }
  }
};

// Run when DOM is loaded
window.addEventListener("DOMContentLoaded", format_images_in_articles, false);
