/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});

particlesJS(
	'particles-js',

	{
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: ['#C6FFDD', '#BE93C5', '#86fde8', '#C9FFBF', '#FFAFBD', '#ffd194']
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 3
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 1,
				random: true,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 8,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 500,
				color: '#ffffff',
				opacity: 0.4,
				width: 2
			},
			move: {
				enable: true,
				speed: 3,
				direction: 'bottom',
				random: true,
				straight: true,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 600
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'repulse'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 0.5
					}
				},
				bubble: {
					distance: 250,
					size: 0,
					duration: 2,
					opacity: 0,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.5
				},
				push: {
					particles_nb: 3
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	}
);