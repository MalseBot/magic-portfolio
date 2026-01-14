/** @format */

const person = {
	firstName: 'Eslam',
	lastName: 'Hassanin',
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: 'Frontend Developer',
	avatar: '/images/avatar.jpg',
	email: 'eslam.hassanin24@gmail.com',
	location: 'Saudi Arabia, Al Khobar', // Display format (not used for time calculations)
	timeZone: 'Asia/Riyadh', // IANA time zone identifier for time calculations
	languages: ['English', 'Arabic'], // optional: Leave the array empty if you don't want to display languages
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/MalseBot',
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/eslam-hegazi-6927751a1/',
	},
	{
		name: 'Email',
		icon: 'email',
		link: `mailto:${person.email}`,
	},
];

const home = {
	path: '/',
	image: '/images/og/home.jpg',
	label: 'Home',
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Developing tomorrow's web experiences today</>,
	featured: {
		display: true,
		title: (
			<>
				Recent project: <strong className='ml-4'>Tas7e7</strong>
			</>
		),
		href: '/work/Tas7e7',
	},
	subline: (
		<>
			I'm Eslam, a Frontend Developer, Turning ideas into interactive digital
			<br />
			experiences with React & Next.js.
		</>
	),
};

const about = {
	path: '/about',
	label: 'About',
	title: `About â€“ ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: 'https://cal.com/malse-bot',
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: (
			<>
				Results-driven Frontend Developer skilled in the React/Next.js framework
				and TypeScript. With almost a year of freelance experience, I build
				optimized, SEO-aware web applications for small businesses. A solid
				grasp of AIDAfundamentals informs my development process to enhance user
				engagement. I am a passionate learner seeking to apply and expand my
				expertise within a innovative tech team. Ready to contribute to creating
				exceptional digital experiences and achieving key performance
				objectives.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: 'Projects',
		experiences: [
			{
				company: 'Tas7e7',
				timeframe: '2025',
				achievements: [
					<>
						Real-time POS and kitchen workflows keep orders moving from front of
						house to prep without delays.
					</>,
					<>
						Role-based access with inventory alerts and reporting for tighter
						operational control.
					</>,
				],
				images: [],
			},
			{
				company: 'WTeeth',
				timeframe: '2025',
				achievements: [
					<>
						Healthcare-first UX with secure access control and protected routes
						built in.
					</>,
					<>
						Component-driven UI and data visualization patterns for fast
						delivery of clinical features.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: '/images/projects/project-01/thumbnail.png',
						alt: 'WTeeth Project',
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: 'DevConnector',
				timeframe: '2024',
				achievements: [
					<>
						Full-stack developer network with profiles, posts, and GitHub
						integration for real-world community flows.
					</>,
					<>
						JWT authentication, protected routes, and a scalable MongoDB data
						model for growth-ready features.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: 'Studies',
		institutions: [
			{
				name: 'University of Alexandria',
				description: <>Studied Marketing management.</>,
			},
			{
				name: 'Center for research & commercial studies',
				description: <>Front-end Development</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: 'Technical skills',
		skills: [
			{
				title: 'JavaScript | Typescript',
				description: (
					<>
						ensuring type safety and maintainability using JavaScript and
						Typescript.
					</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: 'React | Next.js',
				description: <>Building next gen apps with Next.js and React.js</>,
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: 'Tailwind | shadcn',
				description: (
					<>
						streamline UI development, enabling responsive, stylish, and
						customizable components effortlessly.
					</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
		],
	},
};

const work = {
	path: '/work',
	label: 'Work',
	title: `Projects â€“ ${person.name}`,
	description: `dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };

