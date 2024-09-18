import ProjectItem from "../components/ProjectItem"

const apps = [
	{
		title: 'Art Nook',
		description: 'A full stack app that uses authentication to allow a user to sign in. Users can upload thier artwork and share it with others. The user can also favorite artwork in the main gallery to view when they want.',
		image: '/images/ArtNook.jpg',
		technologies: 'JS | React | Apollo | GraphQL | HTML | SCSS',
		url: "https://art-nook.onrender.com/",
		gitUrl: "https://github.com/rosey-flo/Art-Nook"
	},
	{
		title: 'Tech Blog',
		description: 'A full stack blog application with authentication for users to post about thier tech intrests. Users can post and comment on other users posts.',
		image: '/images/techBlog.jpg',
		technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions',
		url: "https://tech-blog-14-mbqa.onrender.com/",
		gitUrl: "https://github.com/philcurtis4/tech_blog_14"
	},
	{
		title: 'Before You Kick the Bucket',
		description: 'A full stack application with authentication for users to search locations by city and a specific landmark they would like to see. Users can save to their own daashbaord for their bucket list',
		image: '/images/BucketListApp.jpg',
		technologies: 'HTML | CSS | JS | Express | Postgres | Sequelize | Sessions',
		url: "https://before-you-kick-the-bucket.onrender.com/",
		gitUrl: "https://github.com/philcurtis4/before_you_kick_the_bucket"
	},
	{
		title: 'Blog App',
		description: 'An app that allows a user to post blogs and view other blogs as well.',
		image: '/images/BlogApp.jpg',
		technologies: 'HTML | CSS | JS ',
		url: "https://github.com/philcurtis4/blog_website_4",
		gitUrl: "https://github.com/philcurtis4/blog_website_4"
	},
	{
		title: 'Weather App',
		description: 'A cool weather application I made that lets you search by city to get the local weather',
		image: '/images/weatherApp.jpg',
		technologies: 'HTML | CSS | JS | DayJS',
		url: "https://github.com/philcurtis4/weather_dashboard_6",
		gitUrl: "https://github.com/philcurtis4/weather_dashboard_6"
	},
	{
		title: 'Task Board',
		description: 'A An application to organize tasks needed to be completed',
		image: '/images/TaskBoard.jpg',
		technologies: 'HTML | CSS | JS ',
		url: "https://github.com/philcurtis4/task_manager_5",
		gitUrl: "https://github.com/philcurtis4/task_manager_5"

	},
	

]


function Projects () {
	const workItems = apps.map((projectItemObj, index) => {
		return <ProjectItem key={index} data={projectItemObj} />
	});

	return (
		<>
			<section id="project" className="projects">
				<h2>Projects</h2>
				<div className="work">
					{workItems}
				</div>

			</section>

			
		</>
	)
}

export default Projects