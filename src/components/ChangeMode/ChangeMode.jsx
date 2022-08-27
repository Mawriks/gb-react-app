export function ChangeMode ({ mode, modeSetter }){

    return <button onClick={ modeSetter }>{ mode ? 'Light Mode' : 'Dark Mode' }</button>;
}