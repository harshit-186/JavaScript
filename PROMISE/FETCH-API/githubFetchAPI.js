async function gitFetchData() {
  let txtGitHubId = document.querySelector("#githubId");
  let detailsDiv = document.querySelector("#details");
  let username = txtGitHubId.value;
  if (username === "") {
    detailsDiv.innerHTML = `<p style="color:crimson;">Please enter a valid github id</p>`;
    return;
  }
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status !== 200) {
      throw new Error("User not found");
    }
    let data = await response.json();

    let name = data.name;
    let company = data.company;
    let website = data.blog;
    let imgUrl = data.avatar_url;
    detailsDiv.innerHTML = "";

    const img = document.createElement("img");
    img.src = imgUrl;
    // alert(imgUrl);

    const p1 = document.createElement("p");
    p1.innerHTML = `<strong>Name:</strong>${name}`;

    const p2 = document.createElement("p");
    p2.innerHTML = `<strong>Company:</strong>${company}`;

    const p3 = document.createElement("p");
    p3.innerHTML = `<strong>Website:</strong><a href=http://${website}>Visit: ${website}</a>`;

    detailsDiv.appendChild(img);
    detailsDiv.appendChild(p1);
    detailsDiv.appendChild(p2);
    detailsDiv.appendChild(p3);
  } catch (error) {
    detailsDiv.innerHTML = `<p style="color:crimson;">${error.message}</p>`;
  }
}
