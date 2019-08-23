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
				value: 120,
				density: {
					enable: true,
					value_area: 1000
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
					nb_sides: 5
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5,
				random: true,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 10,
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
				speed: 2,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'bubble'
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
					distance: 400,
					size: 5,
					duration: 0.3,
					opacity: 1,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	}
);
