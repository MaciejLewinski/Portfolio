//  EMAIL BUTTON ANIMATION

const faEmail = $(".fa-email");
const textBubble = $("#textBubble");
const textBubbleInfo = $("#textBubbleInfo");

faEmail.hover(
  function bounce() {
    textBubble.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.7s"
    })
    textBubbleInfo.css({
        "animation-name": "expand-bounce",
        "animation-duration": "0.5s"
    })
  },
  function shrink() {
    textBubble.css({
      "animation-name": "shrink",
      "animation-duration": "0.2s"
    });
    textBubbleInfo.css({
      "animation-name": "shrink",
      "animation-duration": "0.2s"
    });
  }
);

// COPY EMAIL FUNCTION

function copyEmail() {
   
   const copyText = document.getElementById("copyEmail");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
  }
  addEventListener