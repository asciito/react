import Patient from './Patient';

export default function PatientsList({ patients }) {
  	return (
		<div className="w-full lg:w-7/12 ">
			<h2 className="font-black text-3xl text-center">Your Patients list</h2>

			<p className="text-xl mt-5 mb-10 text-center">
				Manage your {''}
				<span className="text-green-600 font-bold">Patients and Appointments</span>
			</p>

			<div className="space-y-4 md:h-screen md:overflow-y-auto md:pr-4">
				{ patients.map((patient, index)=> ( <Patient patient={ patient } key={ index }/> ))}
			</div>
		</div>
	)
}
