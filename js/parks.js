let button = document.getElementById("gn-park-search");
button.onclick = makeAsynchronousRequestToWebserver;

querySearchCodes = {
  "Parks": "parks",
  "Things To DO": "thingstodo",
  "Campgrounds": "campgrounds",
  "Visitor Centers": "visitorcenter",
}

function makeAsynchronousRequestToWebserver() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      writeResultsToDiv(this.responseText);
    }
  };

  let sc = document.getElementById("gn-outdoor-categories");
  let searchCategory = sc.options[sc.selectedIndex].text.split(" ").join("").toLowerCase();
  let ss = document.getElementById("gn-state-locations");
  let searchState = ss.options[ss.selectedIndex].text;

  let apiKey = "qYFp1dJ1RrZI22xXBoLNe6G1iipJubnyLnBfQ4yY";
  queryString =`https://developer.nps.gov/api/v1/${searchCategory}?stateCode=${searchState}&api_key=${apiKey}`;

  console.log(searchCategory, searchState);


  //get query parameters
  
  xmlhttp.open("GET", queryString, true);
  xmlhttp.send();
}

function writeResultsToNewWindow(response) {
  var newWindow = window.open("","Test","width=600,height=700,scrollbars=1,resizable=1");
  var html = `<html><head>${response}</head><body>`;
  newWindow .document.open();
  newWindow .document.write(response);
}

function writeResultsToDiv(response) {
  let outputDiv = document.getElementById("gn-output-pane");
  outputDiv.style.height = "auto";
  outputDiv.innerHTML = response;
}

/*
function updateDom(response) {
  //let stringifiedJSONResponse = JSON.stringify(response, null, 2); // spacing level = 2
  //console.log(stringifiedJSONResponse);
  var jsonPretty = JSON.stringify(JSON.parse(response),null,2);
  writeResultsToNewWindow(jsonPretty);
}



function makeAsynchronousRequestToWebserver() {
    let request = createXmlHttpRequest();
    configureXmlHttpRequest(request);
    request.open("GET", "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=qYFp1dJ1RrZI22xXBoLNe6G1iipJubnyLnBfQ4yY", false);
    request.send(null);
    console.log(request.response);

}

function createXmlHttpRequest() {
  let request;
  try { // Opera 8.0+, Firefox, Safari
      request = new XMLHttpRequest();
  } catch(someError) {
      try { // Internet Explorer Browser
          request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(someError) {
          try {
              request = new ActiveXObject("Microsoft.XMLHTTP");
          } catch(someError) {
              alert("Download a better browser");
          }
      }
  }
  return request;
}

function configureXmlHttpRequest(request) {
  request.onreadystatechange = function() {
      // request finished and response is ready
      if(request.readyState == 4) {
          updateDom(request.response);
      }
  }
  console.log("onreadystatechange calls the callback() function is = " + request.onreadystatechange)
  console.log("The readyState at this point is = " + request.readyState);
}
*/
