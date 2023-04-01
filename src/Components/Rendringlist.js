const Rendringlist=()=>
{
    //   const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //     ];
    //     export function List() {
    //             const listItems = people.map(person =>
    //                 <li>{person}</li>
    //             );
    //             return <ul>{listItems}</ul>;  //There is an error in the code and data is also not structured!!
    //             }
        const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
        }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        }];
    const chemists = people.filter(person =>
    person.profession === 'chemist'
    );
}
export default Rendringlist;