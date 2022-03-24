import PatientMeta from "./PatientMeta"

export default function Patient({patient: { pet, owner, email, date, symptoms }}) {
  return (
    <div className="bg-white px-5 py-10 rounded-xl shadow-md">
        <PatientMeta label="Pet Name:" data={ pet }/> 
        <PatientMeta label="Owner Name:" data={ owner }/> 
        <PatientMeta label="E-amil:" data={ email }/> 
        <PatientMeta label="Date:" data={ new Date(date).toLocaleDateString('en-US') }/> 
        <PatientMeta label="Symptoms:" data={ symptoms }/> 
    </div>
  )
}
