function checkAnswer(button, isCorrect) {
    const feedback = document.getElementById("feedback");
  
    if (isCorrect) {
      feedback.textContent = "Parabéns! Você acertou!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Resposta incorreta. Tente novamente!";
      feedback.style.color = "red";
    }
  
    const buttons = document.querySelectorAll(".quiz .answers button");
    buttons.forEach((btn) => (btn.disabled = true));
  
    if (!isCorrect) {
      buttons.forEach((btn) => {
        if (btn.textContent.includes("símbolo da luta") || btn.textContent.includes("Desigualdades enraizadas")) {
          btn.style.backgroundColor = "green";
        }
      });
    }
  }
  
  