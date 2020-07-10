let button = document.getElementById("gn-park-search");
button.onclick = makeAsynchronousRequestToWebserver;


function updateDom(response) {
  //let theOutputDiv = document.getElementById("gn-output-pane");
  //let content = document.createTextNode(response);
  //theOutputDiv.appendChild(content);
  writeResultsToNewWindow(response);


  //document.getElementById("gn-output-pane").innerHtml += request.response;
  //document.write(request.response);
}
function writeResultsToNewWindow(response) {


    var newWindow = window.open("","Test","width=300,height=300,scrollbars=1,resizable=1")

    //read text from textbox placed in parent window
    //var text = document.form.input.value

    var html = "<html><head></head><body>"+ response;
    //html += "How are you today?</body></html>"


    newWindow .document.open()
    newWindow .document.write(html)
    //newWindow .document.close()

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
