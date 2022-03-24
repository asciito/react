import Header from './components/Header';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList'
import { useState, useEffect } from 'react';

function App() {
	const [ patients, setPatients ] = useState([]);
	const [ patientToEdit, setPatientToEdit ] = useState(null);

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

	/**
	 * Functions to handle Events or other things
	 * 
	 * */
	const handleSubmit = newPatient => {
		if (! newPatient.hasOwnProperty('id')) {
			return setPatients([
				...patients,
				{ id: Date.now() * Math.floor( Math.random() * 100 ), ...newPatient }
			]);
		}

		setPatients(patients.map(patient => patient.id === newPatient.id ? newPatient : patient ));
		setPatientToEdit(null);
	}

	const handleEdit = oldPatient => setPatientToEdit(oldPatient);

	const handleDelete = patientID => setPatients(patients.filter(patient => patient.id !== patientID));

	return (
		<div className="max-w-[1600px] mx-auto mt-20 px-5 text-gray-700">
			<Header>
				<span className="text-green-600">Veterinary</span> Services  
			</Header>

			<div className="mt-12 lg:flex lg:space-x-10 lg:pb-5">
				<PatientForm onSubmit={ handleSubmit } patientToEdit={ patientToEdit }/>
				<PatientsList patients={ patients } onEdit={ handleEdit } onDelete={ handleDelete } />
			</div>
		</div>
	)
}

export default App
