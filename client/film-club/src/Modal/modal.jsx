import React, { useState } from "react";
import service from '../service';
import './modal.css';

function Modal(props) {
	const { show, closeModal } = props;
	const [userRating, setUserRating] = useState([])

	const handleForm = async (event) => {
		event.preventDefault();
		props.addWatchedFromHome(props.addWatch, userRating);
		closeModal();
		setUserRating('');
	}

	return (
		<>
			<div className={show ? "overlay" : "hide"} onClick={closeModal} />
			  <div className={show ? "modal" : "hide"}>
				  <h1>What did you think of the movie?</h1>
				  <p>Submit your rating below:</p>
				<button onClick={closeModal}>X</button>
				<form onSubmit={handleForm}>
					<input className='modal-input' type='text' name='userRating' value={userRating} onChange={(event) => setUserRating(event.target.value)} placeholder='Enter your rating from 1 to 5...' required />
				</form>
			</div>
		</>
	);
}

export default Modal;