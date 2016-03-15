---
---

# Checks if a DOM element `element` (DOM element) has only one child and if
# this child has `needed` (string) as tag name.

has_only_this_child = (element, needed) ->
  children = element.childNodes.length
  if children == 1
    tag = element.childNodes[0].tagName
    if tag
      if tag.toLowerCase() == needed
        return true
  false

# Add captions to image (by using the `alt` attr)

add_image_caption = (image) ->
  caption = document.createElement 'span'
  caption.setAttribute 'class', 'caption'
  caption.innerHTML = image.getAttribute 'alt'
  image.parentNode.appendChild caption

# Center images in article tag, and add caption if the image is not a link
# (adds a `image` class to all paragraphs that have only an image tag as
# child; or to ones that have only a anchor tag with only an image inside)

format_images_in_articles = () ->
  for article in document.getElementsByTagName 'article'
    for paragraph in article.getElementsByTagName 'p'
      add_class = false
      if has_only_this_child paragraph, 'img'
        add_image_caption paragraph.childNodes[0]
        add_class = true
      else if has_only_this_child paragraph, 'a'
        if has_only_this_child paragraph.childNodes[0], 'img'
          add_class = true
      if add_class == true
        paragraph.setAttribute 'class', 'image'

# Track outbound link with Google Analytics
trackOutboundLink = (e) ->
  url = e.toElement.href
  if typeof ga == 'function'
    data = 
      transport: 'beacon'
      hitCallback: () -> document.location = url
    ga 'send', 'event', 'eBook', 'download', data
  
# Attach outbound link tracking if Google Analytics is loaded
attatch_ebook_tracking = () ->
    ebook = document.getElementById 'ebook'
    ebook.onclick = trackOutboundLink

# Run when DOM is loaded
window.addEventListener "DOMContentLoaded", format_images_in_articles, false
window.addEventListener "DOMContentLoaded", attatch_ebook_tracking, false



