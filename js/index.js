const nameElement = document.getElementById('name');
    const names = ['a Developer', 'an Artist','an Editor', 'Jefferson'];
    let currentIndex = 0;
    let isTyping = true;
    let currentText = '';
    let currentIndexLetter = 0;
    let delay;

    function typeText() {
      if (isTyping) {
        currentText = names[currentIndex].substring(0, currentIndexLetter);
        nameElement.textContent = currentText;
        currentIndexLetter++;

        if (currentIndexLetter <= names[currentIndex].length) {
          setTimeout(typeText, 100);
        } else {
          delay = setTimeout(deleteText, 2000);
        }
      } else {
        currentText = names[currentIndex].substring(0, currentIndexLetter);
        nameElement.textContent = currentText;
        currentIndexLetter--;

        if (currentIndexLetter < 0) {
          isTyping = true;
          currentIndex = (currentIndex + 1) % names.length;
          setTimeout(typeText, 0); // Display next word instantly
        } else {
          setTimeout(deleteText, 100);
        }
      }
    }

    function deleteText() {
      isTyping = false;
      currentText = names[currentIndex].substring(0, currentIndexLetter);
      nameElement.textContent = currentText;
      currentIndexLetter--;

      if (currentIndexLetter < 0) {
        clearTimeout(delay); // Clear the delay after deletion
        isTyping = true;
        currentIndex = (currentIndex + 1) % names.length;
        setTimeout(typeText, 0); // Display next word instantly
      } else {
        setTimeout(deleteText, 50);
      }
    }

    setTimeout(typeText, 2000);