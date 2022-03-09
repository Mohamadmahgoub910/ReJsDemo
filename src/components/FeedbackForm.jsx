import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ addAnewFeedback }) {
	const [text, setText] = useState('')
	const [msg, setMsg] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	// validate input 
	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMsg(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setMsg('input must be more than 10 character')
			setBtnDisabled(true)
		} else {
			setMsg(null)
			setBtnDisabled(false)
		}
		setText(e.target.value);
	}
	// Handle Submit 
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {

			const newFeedbackItem = {
				text,
				rating,
			}
			addAnewFeedback(newFeedbackItem);
			setText('')
		}
	}
	return (
		<>
			<Card>
				<form onSubmit={handleSubmit}>
					<h4>How would you rate our services?</h4>
					<RatingSelect select={(rating) => setRating(rating)} />
					<div className="input-group">
						<input
							type="text"
							onChange={handleTextChange}
							placeholder='Please write your rate here'
							value={text} />
						<Button
							isDisabled={btnDisabled}
							type='submit'
						>
							Send
						</Button>
					</div>
					{msg && <div className='message'>{msg}</div>}
				</form>
			</Card>
		</>
	)
}

export default FeedbackForm