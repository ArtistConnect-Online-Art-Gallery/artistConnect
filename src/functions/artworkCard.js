async function artworkCard(user, artworkImg, title, description, genre, medium ){ 

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/artworks/:id/",
      {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: user, 
            artworkImg: artworkImg, 
            title: title, 
            description: description,
            genre: genre, 
            medium: medium,

        }),
      }
    );

	let data = await result.json();

    console.log(data);

	return data;

}

module.exports = {artworkCard}