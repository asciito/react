export default function PatientMeta({ label, data }) {
    return (
        <p className="font-bold md-3 uppercase">
            <span className="text-green-700">{ label }</span> {''}
            <span className="font-normal normal-case">{ data }</span>
        </p>        
    )
}
