
const Person = ({names}) => {
    return (
        <div>
          <p>id:{names.id}</p>
            <h1> Name: {names.name}</h1>
            <h2>Job: {names.job}</h2>
            <h4>age {names.age}</h4>
        
        </div>
    );
};

export default Person;

