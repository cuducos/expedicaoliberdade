// Checks if a DOM element `element` (DOM element) has only one child and if
// this child has `needed` (string) as tag name.

var has_only_this_child = function(element, needed) {
  var children, tag;
  children = element.childNodes.length;
  if (children === 1) {
    tag = element.childNodes[0].tagName;
    if (tag) {
      if (tag.toLowerCase() === needed) {
        return true;
      }
    }
  }
  return false;
};

// Add captions to image (by using the `alt` attr)
var add_image_caption = function(image) {
  var caption;
  caption = document.createElement('span');
  caption.setAttribute('class', 'caption');
  caption.innerHTML = image.getAttribute('alt');
  return image.parentNode.appendChild(caption);
};

// Center images in article tag, and add caption if the image is not a link
// (adds a `image` class to all paragraphs that have only an image tag as
// child; or to ones that have only a anchor tag with only an image inside)
var format_images_in_articles = function() {
  var add_class, article, i, len, paragraph, ref, results;
  ref = document.getElementsByTagName('article');
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    article = ref[i];
    results.push((function() {
      var j, len1, ref1, results1;
      ref1 = article.getElementsByTagName('p');
      results1 = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        paragraph = ref1[j];
        add_class = false;
        if (has_only_this_child(paragraph, 'img')) {
          add_image_caption(paragraph.childNodes[0]);
          add_class = true;
        } else if (has_only_this_child(paragraph, 'a')) {
          if (has_only_this_child(paragraph.childNodes[0], 'img')) {
            add_class = true;
          }
        }
        if (add_class === true) {
          results1.push(paragraph.setAttribute('class', 'image'));
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    })());
  }
  return results;
};

// Track outbound link with Google Analytics
var trackOutboundLink = function(e) {
  var data, url;
  url = e.toElement.href;
  if (typeof ga === 'function') {
    data = {
      transport: 'beacon',
      hitCallback: function() {
        return document.location = url;
      }
    };
    return ga('send', 'event', 'eBook', 'download', data);
  }
};


// Attach outbound link tracking if Google Analytics is loaded
var attatch_ebook_tracking = function() {
  var ebook;
  ebook = document.getElementById('ebook');
  return ebook.onclick = trackOutboundLink;
};

// Run when DOM is loaded
window.addEventListener("DOMContentLoaded", format_images_in_articles, false);
window.addEventListener("DOMContentLoaded", attatch_ebook_tracking, false);
