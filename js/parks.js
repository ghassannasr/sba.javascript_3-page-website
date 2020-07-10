
let parkSearchButton = document.getElementById("gn-park-search");
parkSearchButton.addEventListener('click', getParkInfo);


async function getParkInfo(evt) {
  try {
    let parkInfo = await fetchParkInfoFromAPI(evt);
    console.log(parkInfo);
  }
  catch(err) {
    console.log(err);
  }
}

function fetchParkInfoFromAPI() {
  console.log("in the fetch");
  return fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Nb7FAVDRUgWhMWROtSnJLcNUf93Iub1q7yGY8eQd")
  .then(response => response.json())
  .then((result) => {
      console.log(result);
      return result;
  })
  .catch(() => {
      return Promise.reject('FAILURE');
  });
}


