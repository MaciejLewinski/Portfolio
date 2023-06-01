//  EMAIL BUTTON ANIMATION

const faEmail = $(".fa-email");
const textBubble = $("#textBubble");
const textBubbleInfo = $("#textBubbleInfo");

faEmail.hover(
	function bounce() {
		textBubble.css({
			"animation-name": "expand-bounce",
			"animation-duration": "0.7s",
		});
		textBubbleInfo.css({
			"animation-name": "expand-bounce",
			"animation-duration": "0.5s",
		});
	},
	function shrink() {
		textBubble.css({
			"animation-name": "shrink",
			"animation-duration": "0.2s",
		});
		textBubbleInfo.css({
			"animation-name": "shrink",
			"animation-duration": "0.2s",
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
addEventListener;

// NAVBAR Scroll

const navbar = document.querySelector('.navbar');
const socialBoxFb = document.querySelector('.fa-facebook');
const socialBoxMail = document.querySelector('.fa-email');
const socialBoxGit = document.querySelector('.fa-github');
const textemail = document.querySelector('#textBubble');
const textinfo = document.querySelector('#textBubbleInfo');
window.onscroll = () => {

    if (window.scrollY > 40) {
		socialBoxFb.classList.add('fa-scroll');	
		socialBoxMail.classList.add('fa-scroll');	
		socialBoxGit.classList.add('fa-scroll');	
		textemail.classList.add('textBubbleScroll');	
		textinfo.classList.add('textBubbleInfoScroll');	
		navbar.classList.add('nav-colored');
	}
	else {
		socialBoxFb.classList.remove('fa-scroll');
		socialBoxMail.classList.remove('fa-scroll');
		socialBoxGit.classList.remove('fa-scroll');
		textemail.classList.remove('textBubbleScroll');	
		textinfo.classList.remove('textBubbleInfoScroll');	
		navbar.classList.remove('nav-colored')
    }
}

// CV UNWRAPPING CARDS

const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')

function showCard() {
	cards.forEach(card => {
		card.classList.remove('active')
		this.classList.add('active')
	})

	handleBgColor(this)
}

const handleBgColor = card => {
	const season = card.getAttribute('data-season')
	body.setAttribute('data-bg', season)
}

cards.forEach(card => card.addEventListener('click', showCard))
