/* Reset & Base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
}

.container {
  width: 100%;
  max-width: 700px;
}

/* Card Style */
.card {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.hidden {
  display: none;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2rem;
  color: #f0f0f0;
}

/* Input & Buttons */
input[type="text"] {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  margin-bottom: 10px;
  outline: none;
  transition: background-color 0.3s ease;
}

input[type="text"]:focus {
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
}

button {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

.btn-primary {
  background-color: #2575fc;
  color: white;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #1953d1;
}

.btn-secondary {
  background-color: #444;
  color: #ddd;
  margin-top: 10px;
}

.btn-secondary:hover {
  background-color: #222;
}

/* Error Message */
.error {
  color: #ff4d4d;
  font-weight: 600;
  margin-bottom: 10px;
  min-height: 20px;
  text-align: center;
}

/* Timer */
#timer {
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffec99;
}

/* Quiz Questions */
.quiz-form > div {
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.quiz-form p {
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #e2e2e2;
}

.quiz-form label {
  display: block;
  margin-bottom: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: #ddd;
  transition: color 0.2s ease;
  user-select: none;
}

.quiz-form input[type="radio"] {
  margin-right: 10px;
}

.quiz-form label:hover {
  color: #fff;
}

/* Leaderboard */
.leaderboard-list {
  list-style-position: inside;
  padding-left: 0;
  font-size: 1.1rem;
  color: #fff;
}

.leaderboard-list li {
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  border-radius: 10px;
}

/* Header layout in quiz */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

@media (max-width: 600px) {
  .card {
    padding: 20px;
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    font-size: 1rem;
  }
}
