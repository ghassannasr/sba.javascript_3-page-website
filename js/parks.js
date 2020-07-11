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
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      writeResultsToDiv(this.responseText);
    }
  };

  let sc = document.getElementById("gn-outdoor-categories");
  let searchCategory = sc.options[sc.selectedIndex].text.split(" ").join("").toLowerCase();
  let ss = document.getElementById("gn-state-locations");
  let searchState = ss.options[ss.selectedIndex].text;

  let apiKey = "qYFp1dJ1RrZI22xXBoLNe6G1iipJubnyLnBfQ4yY";
  queryString = `https://developer.nps.gov/api/v1/${searchCategory}?stateCode=${searchState}&api_key=${apiKey}`;

  console.log(searchCategory, searchState);

  xmlhttp.open("GET", queryString, true);
  xmlhttp.send();
}

function writeResultsToNewWindow(response) {
  var newWindow = window.open("", "Test", "width=600,height=700,scrollbars=1,resizable=1");
  var html = `<html><head>${response}</head><body>`;
  newWindow.document.open();
  newWindow.document.write(response);
}

function writeResultsToDiv(response) {
  let outputDiv = document.getElementById("gn-output-pane");
  outputDiv.style.height = "auto";
  outputDiv.innerHTML = response;
}
