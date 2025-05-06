# Math Quiz Web Application 📚✨

## Overview 🌟

This University project (12/2022) is a web-based quiz application designed for first-year high school students to review fundamental concepts in Mathematics, Algebra, and Geometry. The quiz consists of 18 questions across 6 different types: True/False, Multiple Choice (one correct answer), Multiple Choice (two correct answers), Fill-in-the-Blank, Ordering, and Matching. The application serves as a practice tool to reinforce basic knowledge through engaging and interactive exercises. 🧠🎯

![Quiz Interface](https://github.com/user-attachments/assets/8ba8dec8-bcbe-4b3b-8925-5c0f6d54352a)


## Features 🚀

- **Question Variety** 📝: Includes 18 questions categorized into 6 types, covering Algebra and Geometry topics.
- **Randomized Selection** 🔄: Displays 6 random questions per session, with each question type appearing up to 3 times.
- **Randomized Answers** 🎲: For Multiple Choice, Matching, and Ordering questions, answer options are shuffled each time the quiz is run.
- **Individual Timers** ⏱️: Each question has a dedicated timer that counts down only when the question is active. Once the timer expires, the question locks, preventing further changes (see Images below).
- **Navigation** ↔️: Users can navigate forward and backward between questions, viewing one question at a time.
- **Results Summary** 🏆: At the end of the quiz, users receive:
  - Success percentage 📊
  - Number of correct and incorrect answers ✅❌
  - Total time spent on the quiz ⏳
  - Remaining time ⏲️

![Question](https://github.com/user-attachments/assets/212f7ec3-87ee-4b6a-bc79-a6f95fa70695)


## Technical Details 🛠️

The application is built to run in a web browser and is structured using the following technologies and tools:

- **HTML** 🖼️: Defines the structure of the quiz interface.
- **CSS** 🎨: Styles the application for a user-friendly experience (style.css).
- **JavaScript** 💻: Handles the quiz logic, randomization, timers, and user interactions (headscript.js).
- **Images** 🖼️: Stored in the `Images` folder, used to support specific questions.
- **Version Control** 📂: GitHub was used for file synchronization and collaboration among team members.

### File Structure 📁

```
├── index.html          # Main HTML file for the application 📄
├── headscript.js       # JavaScript file for quiz logic 🧩
├── style.css           # CSS file for styling 🎨
└── Images/             # Folder containing images for questions 🖼️
```

## Installation and Setup ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/Anastasis-M/Questionnaire.git
   ```
2. Navigate to the project directory:

   ```bash
   cd Questionnaire
   ```
3. Open `index.html` in a web browser to run the application locally. 🌐

## Usage 🎮

- Launch the quiz by opening `index.html` in a browser. 🚀
- Answer the 6 randomly selected questions, navigating between them as needed. ↔️
- Submit answers before the timer for each question expires. ⏰
- Review the results at the end of the quiz. 📊🎉

![Results Screen](Images/results_screen_placeholder.png)
## Οδηγίες Χρήσης για Μη Τεχνικούς Χρήστες 🎮

Καλώς ήρθατε στην ιστοσελίδα του ερωτηματολογίου! Αυτή η εφαρμογή σας επιτρέπει να κάνετε ένα ερωτηματολόγιο μαθηματικών Α΄ Λυκείου που περιλαμβάνει ερωτήσεις "Σωστού Λάθους", "Πολλαπλής Επιλογής" μίας ή και δύο απαντήσεων, "Διάταξης", "Συμπλήρωσης Κενού" και "Αντιστοίχισης". 📝

### Πώς να Χρησιμοποιήσετε το Ερωτηματολόγιο:

1. **Έναρξη του Ερωτηματολογίου** 🚀:
   - Πατήστε το κουμπί "Έναρξη" στην κάρτα εκκίνησης για να ξεκινήσετε.
   - Θα μεταφερθείτε στην κάρτα ερωτήσεων και θα εμφανιστεί η πρώτη ερώτηση.

2. **Απάντηση Ερωτήσεων** ❓:
   - Κάθε ερώτηση έχει αντίστροφη μέτρηση, η οποία ξεκινά με το που εμφανιστεί η ερώτηση. Ο διαθέσιμος χρόνος της ερώτησης που βρίσκεστε θα εμφανίζεται στο πάνω δεξιό μέρος της κάρτας. ⏱️
   - Για τις ερωτήσεις "Πολλαπλής Επιλογής" και "Διάταξης", κάντε "drag’n’drop" για να τοποθετήσετε τις εικόνες στη σωστή θέση. 🖱️
   - Αν θεωρείτε ότι έχετε ολοκληρώσει μια ερώτηση, πατήστε το κουμπί "Επόμενη" για να προχωρήσετε. Η αντίστροφη μέτρηση σταματά αν υπάρχει ακόμα χρόνος, και εμφανίζεται η επόμενη ερώτηση. ➡️
   - Αν αλλάξετε γνώμη, μπορείτε να επιστρέψετε πατώντας το κουμπί "Προηγούμενη" και να αλλάξετε την απάντησή σας (έχοντας υπόψη τον διαθέσιμο χρόνο της ερώτησης). ⬅️

3. **Υποβολή του Ερωτηματολογίου** ✅:
   - Αφού απαντήσετε σε όλες τις ερωτήσεις, πατήστε το κουμπί "Οριστική Υποβολή".
   - Θα εμφανιστεί μια κάρτα αποτελεσμάτων με το ποσοστό επιτυχίας, τον αριθμό σωστών και λανθασμένων ερωτήσεων και τον χρόνο που αφιερώσατε στο ερωτηματολόγιο. 📊

Ευχαριστούμε που χρησιμοποιήσατε την εφαρμογή του ερωτηματολογίου. Καλά αποτελέσματα! 🎉
