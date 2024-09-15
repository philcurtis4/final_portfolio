function ProjectItem (props) {
	const imageObj = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${props.data.image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<>
			<a className="row" href={props.data.url} target="_blank">
				<article className="work-item" style={imageObj}>
					
				</article>
				<div className="content">
					<h4>{props.data.title}</h4>
					<p>{props.data.description}</p>
					<p className="technologies">{props.data.technologies}</p>
				</div>
					
			</a>
		</>
	)
}

export default ProjectItem