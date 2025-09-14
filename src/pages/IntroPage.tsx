											{/* Circuit symbol */}
											<span className="absolute left-10 top-10 animate-bounce-slow z-20" style={{animationDelay: '2.5s'}}>
												<svg width="40" height="40" fill="none" viewBox="0 0 24 24">
													<rect x="6" y="6" width="12" height="12" rx="3" fill="#38bdf8" opacity="0.85" />
													<circle cx="9" cy="9" r="1.5" fill="#fff" />
													<circle cx="15" cy="15" r="1.5" fill="#fff" />
													<path d="M9 9h6v6" stroke="#2563eb" strokeWidth="2" />
												</svg>
											</span>
											{/* Medal symbol */}
											<span className="absolute right-16 top-36 animate-bounce-slower z-20" style={{animationDelay: '3.1s'}}>
												<svg width="64" height="64" fill="none" viewBox="0 0 24 24">
													<circle cx="12" cy="10" r="6" fill="#f59e42" opacity="0.95" />
													<rect x="10" y="16" width="4" height="6" rx="1" fill="#fbbf24" />
													<path d="M12 16v6" stroke="#fff" strokeWidth="2" />
												</svg>
											</span>
											{/* Growth graph symbol */}
											<span className="absolute left-1/3 bottom-10 animate-bounce-slow z-20" style={{animationDelay: '3.7s'}}>
												<svg width="48" height="48" fill="none" viewBox="0 0 24 24">
													<rect x="4" y="17" width="4" height="3" rx="1" fill="#34d399" />
													<rect x="10" y="13" width="4" height="7" rx="1" fill="#34d399" />
													<rect x="16" y="9" width="4" height="11" rx="1" fill="#34d399" />
													<path d="M5 17l5-5 4 4 5-8" stroke="#10b981" strokeWidth="2" fill="none" />
												</svg>
											</span>
import credifyLogo from "@/assets/Credify.png";
import aiSkillImg from "@/assets/features/Ai verfied skills Concept.png";
import blockchainSkillImg from "@/assets/features/Skill Storage Concept.png";
import projectValidationImg from "@/assets/features/Project Verification Concept.png";
import smartResumeImg from "@/assets/features/Smart Resume Concept.png";
import credibilityScoreImg from "@/assets/features/Credibility Score Concept.png";
import verifiedFeedImg from "@/assets/features/Verified Feed Concept.png";
import recruiterDashboardImg from "@/assets/features/Recruiter Dashboard Concept.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Example minimal SVG icons (replace with your own or a library for production)
const FeatureIcon = ({ type }: { type: string }) => {
	switch (type) {
		case "network":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<circle cx="8" cy="10" r="2" fill="#2563eb" />
					<circle cx="16" cy="10" r="2" fill="#2563eb" />
					<rect
						x="9"
						y="14"
						width="6"
						height="2"
						rx="1"
						fill="#2563eb"
					/>
				</svg>
			);
		case "job":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<rect
						x="4"
						y="7"
						width="16"
						height="13"
						rx="2"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<rect
						x="8"
						y="3"
						width="8"
						height="4"
						rx="1"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			);
		case "resume":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<rect
						x="5"
						y="3"
						width="14"
						height="18"
						rx="2"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<line
						x1="8"
						y1="7"
						x2="16"
						y2="7"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<line
						x1="8"
						y1="11"
						x2="16"
						y2="11"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			);
		case "growth":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						d="M4 20v-4a4 4 0 014-4h8a4 4 0 014 4v4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<circle cx="12" cy="7" r="4" stroke="#2563eb" strokeWidth="2" />
				</svg>
			);
		case "secure":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<rect
						x="5"
						y="11"
						width="14"
						height="8"
						rx="2"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<path
						d="M12 11V7a4 4 0 018 0v4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			);
		case "inclusive":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<circle
						cx="12"
						cy="12"
						r="4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			);
		case "analytics":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<rect
						x="4"
						y="17"
						width="4"
						height="3"
						rx="1"
						fill="#2563eb"
					/>
					<rect
						x="10"
						y="13"
						width="4"
						height="7"
						rx="1"
						fill="#2563eb"
					/>
					<rect
						x="16"
						y="9"
						width="4"
						height="11"
						rx="1"
						fill="#2563eb"
					/>
				</svg>
			);
		case "collab":
			return (
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						cx="8"
						cy="12"
						r="4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<circle
						cx="16"
						cy="12"
						r="4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<path
						d="M12 16v4"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			);
		default:
			return null;
	}
};

const features = [
       {
	       icon: "ai-skill",
	       title: "AI-Verified Skills",
	       description:
		       "Add a skill, take an AI test, and earn a verified badge that proves your expertise.",
	       image: aiSkillImg,
	       color: "#90ee90", // lightGreen
       },
       {
	       icon: "blockchain-skills",
	       title: "Blockchain Skill Storage",
	       description:
		       "Store and verify your skills securely on the blockchain for tamper-proof, decentralized credibility.",
	       image: blockchainSkillImg,
	       color: "#38bdf8", // sky blue
       },
       {
	       icon: "project-validation",
	       title: "Project Validation",
	       description:
		       "Upload your project—AI checks functionality and originality for true validation.",
	       image: projectValidationImg,
	       color: "#a78bfa", // violet
       },
       {
	       icon: "smart-resume",
	       title: "Smart Resume",
	       description:
		       "Your resume updates automatically as you add new skills, certifications, or projects.",
	       image: smartResumeImg,
	       color: "#fb923c", // orange
       },
       {
	       icon: "credibility-score",
	       title: "Credibility Score",
	       description:
		       "A trust score recruiters can rely on, built from your verified activity.",
	       image: credibilityScoreImg,
	       color: "#ef4444", // red
       },
       {
	       icon: "verified-feed",
	       title: "Verified Feed",
	       description:
		       "Only professional posts and project updates are allowed—no spam, just value.",
	       image: verifiedFeedImg,
	       color: "#06b6d4", // greenish blue
       },
       {
	       icon: "recruiter-dashboard",
	       title: "Recruiter Dashboard",
	       description:
		       "Recruiters search only verified, credible candidates for the best matches.",
	       image: recruiterDashboardImg,
	       color: "#fdba74", // light orange
       },
];

const IntroPage = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden text-[2rem] md:text-[2.5rem]">
			{/* Hero Section */}
			<header className="flex flex-col items-center justify-center py-8 px-2">
		   {/* Hero background gradient and glow */}
		   <div className="absolute top-0 left-0 w-full h-[420px] z-0 pointer-events-none">
			   <div className="w-full h-full bg-gradient-to-tr from-pink-400 via-yellow-300 to-green-300 opacity-70 blur-2xl" />
		   </div>
	       <div className="relative z-10 flex flex-col items-center justify-center">
				 <div className="relative flex justify-center items-center w-full mb-4">
								<img
										src={credifyLogo}
										alt="Credify"
										style={{
												height: "320px",
												width: "100vw",
												maxWidth: "1600px",
												objectFit: "contain",
												background: "none",
												borderRadius: 0,
												display: "block",
												margin: "0 auto"
										}}
								/>
												{/* Animated floating shapes and symbols */}
												<span className="absolute left-12 top-8 w-16 h-16 bg-blue-400 rounded-full opacity-40 animate-bounce-slow" style={{animationDelay: '0.2s'}} />
												<span className="absolute right-24 top-20 w-10 h-10 bg-purple-400 rounded-full opacity-30 animate-bounce-slower" style={{animationDelay: '0.6s'}} />
												<span className="absolute left-1/2 bottom-0 w-24 h-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20 blur-md animate-pulse" />
																{/* Authorization symbol (shield with check) */}
																<span className="absolute left-32 top-32 animate-bounce-slow" style={{animationDelay: '1.2s'}}>
																	<svg width="56" height="56" fill="none" viewBox="0 0 24 24">
																		<path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" fill="#2563eb" opacity="0.85" />
																		<path d="M9.5 12.5l2 2 3-3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
																	</svg>
																</span>
																{/* Certificate symbol (ribbon) */}
																<span className="absolute right-32 top-10 animate-bounce-slower" style={{animationDelay: '2.1s'}}>
																	<svg width="56" height="56" fill="none" viewBox="0 0 24 24">
																		<circle cx="12" cy="10" r="6" fill="#fbbf24" opacity="0.95" />
																		<path d="M12 16v4m0 0l-2-2m2 2l2-2" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
																	</svg>
																</span>
																{/* Book symbol (open book) */}
																<span className="absolute left-1/4 bottom-8 animate-bounce-slower" style={{animationDelay: '1.7s'}}>
																	<svg width="56" height="56" fill="none" viewBox="0 0 24 24">
																		<path d="M3 6a1 1 0 011-1h7v14H4a1 1 0 01-1-1V6zm17-1h-7v14h7a1 1 0 001-1V6a1 1 0 00-1-1z" fill="#a78bfa" opacity="0.95" />
																		<path d="M12 5v14" stroke="#fff" strokeWidth="2" />
																	</svg>
																</span>
												<style>{`
													@keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }
													.animate-bounce-slow { animation: bounce-slow 3s infinite; }
													@keyframes bounce-slower { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
													.animate-bounce-slower { animation: bounce-slower 4.5s infinite; }
												`}</style>
				 </div>
	       </div>
				<h2 className="text-3xl text-blue-700 mb-4 text-center font-medium">
					Empowering Connections and Opportunities
				</h2>
				   {/* Removed duplicate background gradient for top section */}
				<div className="w-full flex flex-col sm:flex-row gap-4 justify-center mt-2">
					<Button
						className="w-full sm:w-auto text-lg md:text-xl px-8 py-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-150 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
						size="lg"
						onClick={() => navigate("/login")}
					>
						Join Now
					</Button>
					<Button
						className="w-full sm:w-auto text-lg md:text-xl px-8 py-3 rounded-full border border-blue-600 bg-white text-blue-700 shadow-md hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800 transition-all duration-150 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
						size="lg"
						variant="outline"
						onClick={() => navigate("/login")}
					>
						Login
					</Button>
				</div>
			</header>
			{/* Features as Blog Cards Section */}
			<section className="flex flex-col items-center justify-center py-8 px-2">
				<div className="w-full flex flex-col gap-8 px-0">
					{features.map((feature, idx) => {
						const isEven = idx % 2 === 0;
						return (
							<article key={idx} className="relative bg-white rounded-none shadow-2xl border-x-0 border-y border-blue-200 flex flex-row w-full items-center hover:shadow-3xl transition-all group min-h-[160px] md:min-h-[200px] lg:min-h-[220px]">
								<div className="absolute inset-0 z-0 pointer-events-none" style={{ filter: 'blur(32px)' }}>
									<div style={{ background: feature.color, opacity: 0.18, width: '100%', height: '100%' }} />
								</div>
								{isEven && (
									<div className="flex items-center justify-center w-[30%] min-h-[100px] md:min-h-[120px] lg:min-h-[140px] p-0 overflow-hidden">
										<img
											src={feature.image}
											alt={feature.title}
											className="rounded-none w-full h-full object-cover border-none shadow-none"
										/>
									</div>
								)}
								<div className="flex flex-col justify-center w-[70%] p-2 md:p-4 lg:p-6">
									<h3 className="text-4xl md:text-5xl font-extrabold mb-4 group-hover:opacity-90 transition-colors" style={{ color: feature.color }}>
										{feature.title}
									</h3>
									<p className="text-2xl md:text-3xl leading-relaxed mb-4" style={{ color: feature.color, opacity: 0.85 }}>
										{feature.description}
									</p>
								</div>
								{!isEven && (
									<div className="flex items-center justify-center w-[30%] min-h-[100px] md:min-h-[120px] lg:min-h-[140px] p-0 overflow-hidden">
										<img
											src={feature.image}
											alt={feature.title}
											className="rounded-none w-full h-full object-cover border-none shadow-none"
										/>
									</div>
								)}
							</article>
						);
					})}
				</div>
			</section>
			{/* Footer */}
			<footer className="mt-auto py-16 px-8 bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-blue-800 text-[1.5rem] md:text-[2rem]">
				<div className="flex gap-6 text-sm">
					<a
						href="#about"
						className="hover:underline"
					>
						About
					</a>
					<a
						href="#contact"
						className="hover:underline"
					>
						Contact
					</a>
					<a
						href="#privacy"
						className="hover:underline"
					>
						Privacy
					</a>
					<a
						href="#terms"
						className="hover:underline"
					>
						Terms
					</a>
				</div>
				<div className="flex gap-4 text-xl">
					<a
						href="#"
						aria-label="Twitter"
						className="hover:text-blue-300"
					>
						{/* Twitter SVG */}
						<svg
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6.99A4.11 4.11 0 0012 8.09c0 .32.04.64.1.94A11.65 11.65 0 013 4.89a4.11 4.11 0 001.27 5.48A4.07 4.07 0 012.8 9.1v.05a4.11 4.11 0 003.3 4.03c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.13 4.13 0 003.84 2.85A8.24 8.24 0 012 19.54a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z"
								fill="currentColor"
							/>
						</svg>
					</a>
					<a
						href="#"
						aria-label="LinkedIn"
						className="hover:text-blue-300"
					>
						{/* LinkedIn SVG */}
						<svg
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<rect
								width="24"
								height="24"
								rx="4"
								fill="#2563eb"
							/>
							<path
								d="M7.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm.25 2.25h2.5v7h-2.5v-7zm4 0h2.5v1.1c.34-.53 1.1-1.1 2.25-1.1 2.13 0 2.5 1.4 2.5 3.22v3.78h-2.5v-3.36c0-.8-.02-1.84-1.12-1.84-1.12 0-1.38.87-1.38 1.77v3.43h-2.5v-7z"
								fill="#fff"
							/>
						</svg>
					</a>
					<a
						href="#"
						aria-label="GitHub"
						className="hover:text-blue-300"
					>
						{/* GitHub SVG */}
						<svg
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"
								fill="currentColor"
							/>
						</svg>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default IntroPage; 