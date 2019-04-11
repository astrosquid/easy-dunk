console.log('index js imported')

let lesson = null;

document.addEventListener('click', event => {
  let backButton = document.getElementsByClassName('control-btn btn-prev btn-anchor')[0];
  let forwButton = document.getElementsByClassName('control-btn btn-forw btn-anchor')[0];

  if (event.target === backButton) {
    console.log("back button");
  }

  if (event.target === forwButton) {
    console.log("forward button");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // fetch lesson from server
  //
  // for now, a stub

  const title = "The Pythagorean Theorem"
  const lessons = [
    "order": 1,
    "content": [
      {
        "type": "text",
        "value": "The Pythagorean Theorem is simple to understand."
      },
      {
        "type": "text",
        "value": "It's an expression for finding the length of a side in a right triangle."
      }
    ]
  ]
});

class Lesson {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    this.currentPage = 0;
  }

  forwardPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage += 1;
    }
  }

  backPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
    }
  }
}
