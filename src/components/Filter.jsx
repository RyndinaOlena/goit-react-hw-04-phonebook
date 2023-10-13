export const Filter = ({ filter, changeFilter }) => {
    return <div><input value={filter} onChange={(event) => changeFilter(event.target.value)}></input></div >
}