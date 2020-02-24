$('video').mediaelementplayer({
  features: ['playpause', 'tracks', 'progress', 'fullscreen', 'volume',],
  startLanguage: 'en',
  stretching: 'responsive'
});



const video = document.getElementsByTagName('video')[0];
const span = document.querySelectorAll('p span');

video.ontimeupdate = () => {
	const vidTime = video.currentTime;

	for (let i = 0; i < span.length; i += 1) {
		if (vidTime > span[i].getAttribute("data-start") &&
		vidTime < span[i].getAttribute("data-end")) {
			span[i].style.color = 'orange';
		}
		else {
			span[i].style.color = '';
		}
	}
};
