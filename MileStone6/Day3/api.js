const handle = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => display(data));
  }
  
  const display = (datas) => {
    const ul = document.getElementById('userlist'); // Corrected the ID parameter
  
    for (const user of datas) {
      console.log(user.email);
      const li = document.createElement('li');
      li.innerText = user.name;
      ul.appendChild(li);
    }
  }

  