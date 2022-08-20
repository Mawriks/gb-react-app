
function ChangeName ({nameSetter}) {

    const changeNameHandler = (e) => {
        e.preventDefault();
        nameSetter(e.target.name.value);
        e.target.name.value = '';
    }

    return <form onSubmit={changeNameHandler}>
        <h3>Whant to change your name?</h3>
        <input type="text" name="name" placeholder="Your new name" /> 
        <button>Do it!</button>
    </form>
}

export default ChangeName;