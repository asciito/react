import { useState, useEffect } from 'react';
import Error from './Error';

const origialPatientObject = {
	pet: '',
	owner: '',
	email: '',
	date: '',
	symptoms: '',
};

export default function PatientForm({ onSubmit }) {
	const [ patientInfo, setPatientInfo ] = useState(origialPatientObject);
	const [ error, setError ] = useState(false);

	const handleChange = ({ target: { name, value } }) => setPatientInfo({ ...patientInfo, [name]: value });

	const handleSubmit = (e) => {
		e.preventDefault();

		// Form validation
		if ( Object.values(patientInfo).includes('') ) return setError(true);
 
		setError(false);
		onSubmit(patientInfo);

		// Reset the values
		setPatientInfo(origialPatientObject);
	}

  	return (
    	<div className="w-full lg:w-5/12">
			<h2 className="font-black text-3xl text-center">Patients follow-up</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Add patients and {''}
				<span className="text-green-600 font-bold">Manage them</span>
			</p>

			<form
				onSubmit={ handleSubmit }
				className="bg-white shadow-md rounded-lg py-10 px-5 space-y-5 mb-10"
			>

				{ error && <Error uppercase>All the fields are required</Error>}

				<div className="md:grid md:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
					<label
					 	htmlFor="pet"
						className="block text-gray-700 uppercase font-bold">Pet Name</label>
					<input
						id="pet"
						name="pet"
						type="text"
						placeholder="Your pet name"
						className="border-2 w-full p-2 placeholder:text-gray-400 rounded-md"
						value={ patientInfo.pet }
						onChange={ handleChange }
					/>
				</div>

				<div className="md:grid md:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
					<label
					 	htmlFor="owner"
						className="block text-gray-700 uppercase font-bold">Owner name</label>
					<input
						id="owner"
						name="owner"
						type="text"
						placeholder="Owner name"
						className="border-2 w-full p-2 placeholder:text-gray-400 rounded-md"
						value={ patientInfo.owner }
						onChange={ handleChange }
					/>
				</div>

				<div className="md:grid md:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
					<label
					 	htmlFor="email"
						className="block text-gray-700 uppercase font-bold">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="E-mail"
						className="border-2 w-full p-2 placeholder:text-gray-400 rounded-md"
						value={ patientInfo.email }
						onChange={ handleChange }
					/>
				</div>

				<div className="md:grid md:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
					<label
					 	htmlFor="date"
						className="block text-gray-700 uppercase font-bold">Date</label>
					<input
						id="created_at"
						name="date"
						type="date"
						className="border-2 w-full p-2 placeholder:text-gray-400 rounded-md"
						value={ patientInfo.date }
						onChange={ handleChange }
					/>
				</div>

				<div className="md:grid md:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
					<label
					 	htmlFor="symptoms"
						className="block text-gray-700 uppercase font-bold">Symptoms</label>
					<textarea
						id="symptoms"
						name="symptoms"
						placeholder="Describe the Symptoms"
						className="border-2 w-full p-2 placeholder:text-gray-400 rounded-md"
						value={ patientInfo.symptoms }
						onChange={ handleChange }
					>{ patientInfo.symptoms }</textarea>
				</div>

				<input
					type="submit"
					className="bg-green-600 hover:bg-green-700 active:bg-green-600 cursor-pointer rounded-sm transition-all w-full p-3 text-white uppercase font-bold"
					value="Add patient"/>
			</form>
		</div>
  	)
}
