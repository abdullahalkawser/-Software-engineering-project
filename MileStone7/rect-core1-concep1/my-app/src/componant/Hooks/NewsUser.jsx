
const NewsUser = ({data}) => {
    console.log(data)

    return (
        <div style={{border: '10px solid yellow',margin: '40px', padding: '20px'}}>
        
            <h2>Name: {data.name}</h2>

            <h3>username: {data.username}</h3>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <h2>Website: {data.website}</h2>

        </div>
    );
};

export default NewsUser;