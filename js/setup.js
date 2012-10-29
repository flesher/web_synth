//globals

var audio_context, oscillator;

//hello audio world

(function init (g){
	try {
		audio_context = new (g.audio_context || g.webkitAudioContext)
		oscillator = audio_context.createOscillator();
	} catch (e) {
		alert('No we audio oscillator support in this browser')
	}
} (window));

