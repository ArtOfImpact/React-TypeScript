import './Sort.css'


let Sort = (props: any) => {
    return (
        <div>
            <select value={props.value} onChange={event => props.onChange(event.target.value)}>
                <option disabled value=''>{props.defaultValue}</option>
                {props.options.map((option: any) =>
                    <option value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Sort;