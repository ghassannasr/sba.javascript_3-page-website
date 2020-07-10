
let parkSearchButton = document.getElementById("gn-park-search");
parkSearchButton.addEventListener('click', getParkInfo);


async function getParkInfo() {
  let result;
  try {
    let parkInfo = await fetchParkInfoFromAPI2();
    //console.log(result);
    //alert("success");
    result = parkInfo;
    document.getElementById("gn-output-pane").innerHtml = result;
  }
  catch(err) {
    //console.log(err);
    result = `Sorry, the search returned an error: ${err}`;
    //console.log(result);
    //alert("success");
    document.getElementById("gn-output-pane").innerHtml = result;
  }

  //console.log("here")  
  
}

function fetchParkInfoFromAPI() {
  const newLocal = "https://jsonplaceholder.typicode.com/todos/1";
  
  //const newLocal = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=qYFp1dJ1RrZI22xXBoLNe6G1iipJubnyLnBfQ4yY";
  return fetch(newLocal)
  .then(response => response.json())
  .then((result) => {
      return result;
  })
  .catch((err) => {
    console.log(err);

      return Promise.reject('FAILURE');
  });
}

function fetchParkInfoFromAPI2() {
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
