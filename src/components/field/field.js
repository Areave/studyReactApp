

const Field = ({field, label}) => {

    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{label}</span>
                <span>{field}</span>
            </li>
        </>
    )
}

export default Field;