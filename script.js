const input = document.getElementById("url");

input.addEventListener("click", async () => {
	try {
		const url = await navigator.clipboard.readText();
        input.value = url;
        console.log("Pasted Successfully");
	} catch (e) {
		console.error("Failed to paste from clipboard", e);
	}
});

function onClick() {
	let url = document.getElementById("url").value;
	document.getElementById("frame").src = url;
	elements = url.split("/");
	console.log(elements);
	const last = elements[elements.length - 1];

	// While sharing the link
	let actual = "";
	if (last.startsWith("watch?v=")) {
		actual = last.slice(8);
		frame.src =
			"https://www.youtube.com/embed/" + actual + "&mute=1&autoplay=1";
	} else {
		frame.src = "https://www.youtube.com/embed/" + last + "&mute=1&autoplay=1";
	}
	// console.log("actual --> " + actual);
	// url = url.split("?si=")[0];
	// url = url.slice(17);
	// let frame = document.getElementById("frame");
	// frame.src = "https://www.youtube.com/embed/" + url;

	console.log("FInal URL " + frame.src);
}
