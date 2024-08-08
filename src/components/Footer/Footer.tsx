import type { FooterProps } from "./types";

export function Footer({ sideFooterImg, socialLinks }: FooterProps) {
	return (
		<footer>
			<div className="socials-con">
				<div className="inner-con">
					<span className="footer-side-img-con">
						<img src={sideFooterImg} alt="side image" className="side-img" />
					</span>
					<div className="social-links-con">
						<ul className="socials-list">
						{
							socialLinks.map(({name, link, icon}, index) => {
								return (
									<li key={index} className="social-item">
										{ /* <Icon icon={icon} /> */ }
										<a href={link} className="social-link">{name}</a>
									</li>
								)
							})
						}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

// cute kusuru png, linkedin, email, instagram, facebook, twitter, discord, 