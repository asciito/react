import Header from './components/Header';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList'
import { useState, useEffect } from 'react';

function App() {
	const [ patients, setPatients ] = useState([]);

	useEffect(() => {
		const patientsLocalStorage = JSON.parse( localStorage.getItem('patients') );

		/*
		 * Just at the first mount and unmount this call it save the values in
		 * the LocalStorage (we don't need this), but because only happens one time 
		 * I don't really care much. 😝
		 */
		patientsLocalStorage ? setPatients(patientsLocalStorage) : null;
	}, []);

	// Here 😝 👇
	useEffect(() => localStorage.setItem('patients', JSON.stringify( patients )), [ patients ]);

	return (
		<div className="max-w-[1600px] mx-auto mt-20 px-5 text-gray-700">
			<Header>
				<span className="text-green-600">Veterinary</span> Services  
			</Header>

			<div className="mt-12 lg:flex lg:space-x-10 lg:pb-5">
				<PatientForm onSubmit={ patient => setPatients([ ...patients, patient ]) }/>
				<PatientsList patients={ patients }/>
			</div>
		</div>
	)
}

export default App
