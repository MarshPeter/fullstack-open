export default function PhonebookForm({
    handleFormSubmit,
    newName,
    newPhoneNumber,
    handleNameTextChange,
    handlePhoneTextChange,
}) {
    return (
        <>
            <h2>Add a new Individual</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    name:{" "}
                    <input value={newName} onChange={handleNameTextChange} />
                </div>
                <div>
                    number:{" "}
                    <input
                        value={newPhoneNumber}
                        onChange={handlePhoneTextChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
}
