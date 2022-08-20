
function ChangeMode ({mode, modeSetter}){

    const changeMode = () =>{
        modeSetter(prev => !prev);
    }

    return <button onClick={changeMode}>{mode?'Light Mode':'Dark Mode'}</button>
}

export default ChangeMode;