import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router';
import image from '../gallery/laterUse/sachinonweb.png';

const Book = () => {
	const [state, handleSubmit] = useForm('xnnakkbg');
	const navigate = useNavigate();

	if (state.succeeded) {
		navigate('/success');

		setTimeout(() => {
			navigate('/', { replace: true });
		},5000)
	}
	
	return (
		<>
			<div className="shadow-lg rounded-md my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
				<div className="text-center md:text-left">
					<h2 className="font-bold text-[25px] text-blue-500">बुकिंग फॉर्म</h2>
					<p className="font-bold text-[15px]">आइए हम आपके घर को बेहतर बनाएं</p>
				</div>
				<form
					id="fs-frm" 
					onSubmit={handleSubmit}
					className="flex flex-col gap-4"
					method="POST"
					action="https://formspree.io/f/xnnakkbg"
					name="hire-me">
					<div className="flex flex-col gap-1">
						<label htmlFor="fullName">नाम</label>
						<input className="w-full rounded-md border border-gray-300 outline-none" type="text" id="fullName" placeholder="" name='fullName' />
						{/* <ValidationError field="text" prefix="Text" errors={state.errors} /> */}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="text">फ़ोन नंबर</label>
						<input className="w-full rounded-md border border-gray-300 outline-none" type="text" placeholder="" name='text'/>
						{/* <ValidationError field="email" prefix="Email" errors={state.errors} /> */}
					</div>
					<div className="flex flex-col">
						<label htmlFor="date">पता</label>
							<textarea className="rounded-md border border-gray-300 outline-none"
								cols="2" rows="3" placeholder="" name='address'>
						</textarea>
					</div>
						<div className="flex flex-col">
							<label htmlFor="workType">विकल्प</label>
							<select id='workType' name="workType"
								className='rounded-md border border-gray-300 outline-none'>
								<option>नई वायरिंग सिस्टम की स्थापना</option>
								<option >सॉकेट, स्विच और विद्युत उपकरणों की इंस्टालेशन</option>
								<option >नए पाइपलाइन सिस्टम की स्थापना</option>
								<option >लीक पाइप की मरम्मत और प्रतिस्थापन</option>
								<option >अन्य कार्य</option>
						  </select>
						</div>

						{/* <fieldset id="fs-frm-selects">
							<label for="timely">1. The service provided was completed in a timely manner.</label>
							<select name="timely" id="timely" required="">
								<option value="" selected="" disabled="">Choose</option>
								<option value="1">Strongly Agree</option>
								<option value="3">Agree</option>
								<option value="5">Neutral</option>
								<option value="7">Disagree</option>
								<option value="9">Strongly Disagree</option>
							</select>
						</fieldset> */}
					<button
						type='submit'
						className="p-3 text-white font-bold px-8 border rounded-md bg-paleBlue hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">
						अभी बुक करें
					</button>
			  </form>

					
			</div>
			<div className="hidden md:flex">
				<img src={image}/>
			</div>
			</div>
		</>
	)
}

export default Book;