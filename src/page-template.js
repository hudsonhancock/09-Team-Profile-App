const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
        <h2 class="card-title">${manager.name}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                
        </ul>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
        <h2 class="card-title">${engineer.name}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                
        </ul>
        `;
  };

  const generateIntern = (intern) => {
    return `
        <h2 class="card-title">${intern.name}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                
        </ul>
        `;
  };

  // Pulls out each role and inserts them into the html Arr.
  htmlArr.push(
    team
      .filter((employee) => employee.role === "manager")
      .map((manager) => generateManager(manager))
      .join("")
  );

  htmlArr.push(
    team
      .filter((employee) => employee.role === "engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );

  htmlArr.push(
    team
      .filter((employee) => employee.role === "intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  const htmlArr = [];
  return htmlArr.join("");
};

module.exports = (team) => {
  return `    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
};
