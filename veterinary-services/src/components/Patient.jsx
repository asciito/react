import PatientMeta from "./PatientMeta"

export default function Patient({ patient, onEdit, onDelete }) {
	const { id, pet, owner, email, date, symptoms } = patient;

  	return (
		<div className="bg-white px-5 py-5 rounded-xl shadow-md">
			<PatientMeta label="Pet Name:" data={ pet }/> 
			<PatientMeta label="Owner Name:" data={ owner }/> 
			<PatientMeta label="E-amil:" data={ email }/> 
			<PatientMeta label="Date:" data={ new Date(date).toLocaleDateString('en-US') }/> 
			<PatientMeta label="Symptoms:" data={ symptoms }/>

			{
				<div className="mt-3 w-full text-right">
					<button
						onClick={ () => onEdit(patient) }
						className="inline-block px-4 py-2 bg-green-600 uppercase hover:bg-green-700 active:bg-green-600 text-white rounded-l-sm ">
							Edit</button>
					<button
						onClick={ () => onDelete(id) }
						className="inline-block px-4 py-2 bg-red-600 uppercase hover:bg-red-700 active:bg-red-600 text-white rounded-r-sm ">
							Delete</button>
				</div>
			}
		</div>
  	)
}
