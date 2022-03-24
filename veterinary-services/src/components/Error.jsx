export default function Error({ uppercase, children }) {
    return (
        <p className={
            "p-3 text-white bg-red-600 rounded-md text-center font-bold"
            + ( uppercase ? ' uppercase' : '')
        }>
            { children }
        </p>
    )
}
