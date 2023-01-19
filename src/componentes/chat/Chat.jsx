import { useState } from "react";
import "./chat.css";
export default function Chat() {
	const [open, setOpen] = useState(false);
	return (
		<div className="container-chat">
			<div className="chatbox">
				<div className={open ? "chatbox__support " : "close-chat"}>
					<div className="chatbox__header">
						<h4 className="chatbox__heading--header">Chat Group</h4>
						<button
							className="chatbox__content__button--header"
							onClick={(e) => {
								e.preventDefault();
								setOpen(false);
							}}
						>
							x
						</button>
					</div>
					<div className="chatbox__messages">
						<div>
							<div className="messages__item messages__item--visitor">
								Can you let me talk to the support?
							</div>
							<div className="messages__item messages__item--operator">
								Sure!
							</div>
							<div className="messages__item messages__item--visitor">
								Need your help, I need a developer in my site.
							</div>
							<div className="messages__item messages__item--operator">
								Hi... What is it? I'm a front-end developer, yay!
							</div>
							<div className="messages__item messages__item--typing">
								<span className="messages__dot"></span>
								<span className="messages__dot"></span>
								<span className="messages__dot"></span>
							</div>
						</div>
					</div>
					<div className="chatbox__footer">
						<input type="text" placeholder="Write a message..." />
						<button className="chatbox__send--footer">Send</button>
					</div>
				</div>
				<form className="chatbox__button">
					{open ? null : (
						<button
							onClick={() => {
								setOpen(true);
							}}
						>
							<svg
								width="30"
								height="30"
								viewBox="0 0 24 24"
								fill="none"
								className="icon-chat"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
									fill="gray"
								/>
							</svg>

							<div className="counter">2</div>
						</button>
					)}
				</form>
			</div>
		</div>
	);
}
