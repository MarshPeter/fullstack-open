export default function Filter({ filterText, handleFilterTextChange }) {
    return (
        <div>
            <p>Look for names containing: </p>
            <input
                value={filterText}
                onChange={handleFilterTextChange}
                type="text"
            />
        </div>
    );
}
