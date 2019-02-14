document.getElementById("share-button").addEventListener("click", toggleQRCode);
document.getElementById("modal-button").addEventListener("click", hideModal);

function toggleQRCode() {
	if (document.getElementById("profile-pic").style.display === "none") {
		document.getElementById("profile-pic").style.display = "block";
		document.getElementById("qr-code").style.display = "none";
	} else {
		document.getElementById("profile-pic").style.display = "none";
		document.getElementById("qr-code").style.display = "block";
	}
}

window.onload = function() {
	console.log(document.referrer)
	console.log(navigator.platform.toLowerCase())
	console.log(!window.navigator.standalone)
	if (document.referrer === "https://andylamgot.github.io/digital-namecard//" || document.referrer === "https://andylamgot.github.io/digital-namecard/"){
		console.log('true1')
		if (navigator.platform.toLowerCase() === "iphone" || navigator.platform.toLowerCase() === "ipad") {
			console.log('true2')
			if (!window.navigator.standalone) {
				console.log('true3')
				document.getElementById("opaque-background").style.display = "block";
				document.getElementById("modal").style.display = "block";
			}
		}
	}
};

function hideModal() {
	document.getElementById("opaque-background").style.display = "none";
	document.getElementById("modal").style.display = "none";
}
