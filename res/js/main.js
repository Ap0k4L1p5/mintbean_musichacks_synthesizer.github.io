// import * as Tone from 'tone';
// import Tone;
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");
// export now;

$(document).ready(function() {
	$(".synth-key").on("click", function() {
		console.log($(this).attr("id"))
	});
});
