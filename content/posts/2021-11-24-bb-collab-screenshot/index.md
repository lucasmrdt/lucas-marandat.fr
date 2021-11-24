---
title: BB Collab Screenshot
author: Lucas Marandat
date: 2021-01-25
tag: "22"
excerpt: Allow you to quickly screenshot the displayed course on BB Collab.
hero: images/screenshot-2021-11-24-at-12.21.12.png
---
# ⚠️ This is not an article, it's a project overview ([source code](https://github.com/lucasmrdt/timetable-to-google-calendar)) 🔎

---

# BB Collab Screenshot
> Allow you to quickly screenshot the displayed course on [BB Collab](https://us.bbcollab.com/collab/ui/scheduler/).

---

## Table of Contents

- [How does it works](#How-does-it-work-?)
- [Contributing](#contributing)
- [License](#license)

---


## How does it work ?

### 1 - Make some necessary imports ...


```python
import pyscreenshot as ImageGrab # Use to take fullscreen screenshot
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
```

### 2 - Take a full-screen screenshot.

To do so, we use `Image.grab` and then convert the screenshot into `np.array`.


```python
img = ImageGrab.grab()
screenshot = np.array(img)
plt.imshow(screenshot)
plt.show()
```


    
![svg](https://raw.githubusercontent.com/lucasmrdt/bb-collab-screenshot/main/notebook_files/notebook_5_0.svg)
    


### 3 - Create a mask that extracts only black pixels.


```python
black_color_1 = np.array([0,0,0], np.uint8)
black_color_2 = np.array([45,45,45], np.uint8)
black_mask = cv.inRange(screenshot, black_color_1, black_color_2)

plt.imshow(black_mask, cmap='gray')
plt.show()
```


    
![svg](https://raw.githubusercontent.com/lucasmrdt/bb-collab-screenshot/main/notebook_files/notebook_7_0.svg)
    


### 5 - Define a function that returns the max rectangle.


```python
def get_max_contour(img):
    selected, m = None, 0
    contours, _ = cv.findContours(img, cv.RETR_CCOMP, cv.CHAIN_APPROX_NONE)
    for contour in contours:
        _,_,w,h = cv.boundingRect(contour)
        if w*h > m:
            selected, m = contour, w*h
    if m == 0:
        return None
    return cv.boundingRect(selected)
```

### 6 - Select the first main area.


```python
img = screenshot.copy()

(x1,y1,w1,h1) = get_max_contour(black_mask)
cropped_mask = black_mask[y1:y1+h1, x1:x1+w1]
cropped_screenshot = screenshot[y1:y1+h1, x1:x1+w1]

plt.subplot(1, 2, 1)
plt.imshow(cropped_mask, cmap='gray')
plt.subplot(1, 2, 2)
plt.imshow(cropped_screenshot)
plt.show()
```


    
![svg](https://raw.githubusercontent.com/lucasmrdt/bb-collab-screenshot/main/notebook_files/notebook_11_0.svg)
    


### 7 - Crop the main area to only keep useful information.


```python
cropped_mask = cv.bitwise_not(cropped_mask)
(x2,y2,w2,h2) = get_max_contour(cropped_mask)
cropped_mask = cropped_mask[y2:y1+y2+h2, x2:x1+x2+w1]
final_screenshot = cropped_screenshot[y2:y1+y2+h2, x2:x1+x2+w2]

plt.subplot(1, 2, 1)
plt.imshow(cropped_mask, cmap='gray')
plt.subplot(1, 2, 2)
plt.imshow(final_screenshot)
plt.show()
```


    
![svg](https://raw.githubusercontent.com/lucasmrdt/bb-collab-screenshot/main/notebook_files/notebook_13_0.svg)
    

---

## Contributing

Fell free to add more useful features, test it and report issues.

## Support

Reach out to me at one of the following places!

- Website at <a href="https://lucas-marandat.fr" target="_blank">`lucas-marandat.fr`</a>
- LinkedIn at <a href="https://www.linkedin.com/in/lucasmrdt/" target="_blank">`@lucasmrdt`</a>

## License

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**


---

## ✍🏻 Something wrong or a suggestion? Suggest a change [here](https://github.com/lucasmrdt/personal-blog/blob/master/content/posts/2021-01-25-bbcollabscreenshot/index.md)
