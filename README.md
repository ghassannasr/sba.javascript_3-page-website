# AD - SBA - HTML/CSS/JavaScript



### General Description & Navigation

* GitHub Pages link: https://ghassannasr.github.io/sba.javascript_3-page-website/

* For this assignment I implemented a 3-page mini website as a celebration of parks in Charleston, SC, and parks in general. 

* I wanted the look and feel of the pages to reflect the vibrance of spring in Charleston ... beautiful blue skies and the colors of cherry and almond blossoms. 

* The entry page is simple. It has a fully-responsive navbar and content, including a little footer. I spent some time experimenting with ways of laying out text on the blue sky, trying to immitate the feel of clouds.

* There are two navigation links at the top that link to other pages: 1) A "Register" link to a page for signing up for a newsletter, and 2) a link in the dropdown to the "Parks" page that provides an interface to an API endpoint at the National Park Service here: https://www.nps.gov/subjects/developer/api-documentation.htm#/visitorcenters/getVisitorCenters . The other links are provided but not implemented.

  * The nav bar at the top has identical html on every page of the website. I therefore produce the nav bar html in a utility script residing in header-functions.js, and I call that function from withing <script> tags near the top of the html body. I am not sure it is best practice to do so, but it certainly helped me in removing the clutter in the pages I was working with.

  * I also included the three Bootstrap links at the bottom of each in a similar utility function residing in footer-function.js that is called at the bottom of each page.

  * If JavaScript is needed during page loading, I included it in header-functions.js. Otherwise I included it in footer-functions.js.

### Bootstrap

* I have been waiting for the opportunity to learn higher level, responsive html that allows me to think in aesthetically pleasing ways that also allow for flexibility. And thus my use of Bootstrap. It took a disproportionate amount of my time, but I think it was worth the challenge in terms of future utility.

* I feel I have finally understood the power of Bootstrap, thanks to this assignment. I now have a good conceptual understanding of the grid system, which looks deceivingly similar to "tables" in its syntax of "rows" and "columns". One of the insights I have gained is that content always resides in Bootstrap columns. Resist the temptation to place content in a row! A column is where responsiveness is implemented. Create a column, even if a single column, before adding page content. Bootstrap is about the trinity of container, row, and column.

* My next challenge was to experiment in ways of customizing Bootstrap without sacrificing its power, which is its responsive design. My process consisted of adding selectors piecemeal and repeatedly checking to make sure that smooth responsive functionality was not sacrificed. The text I added on the cherry blossom background on the first page is not fully responsive. In order to keep track of the html selectors I added, I prefixed each selector I created with my initials: "gn".

* I experimented with creating an image background to smooth the edges of Bootstrap components and create continuity that would maintain the power of Bootstrap without necessarily being beholden to its "blocky" look. The newsletter registration page is an example. It contains a Jumbotron and a form on the page, but the background image effaces the component boundaries.  

### Forms

* I created two forms, one for registering for a newsletter, and another for doing a search that utilizes the National Park Service API.

  * My implementation of form validation on the newsletter form is minimal. I tested the functionality of doing validation on the e-mail field. I searched the Web for regular expressions used for checking valid email addresses, and the results were amazing! I used a very simple one that if matched opens a "success" alert box, and "failure" otherwise. I would like to in the future implement a tooltip animation.

  * I found myself questioning whether input elements really need to be placed inside form tags. Some of the problems I encountered in implementing event listeners seemed to be complicated by the fact that forms add their own level of functionality to input elements placed inside them, possibly interfering with more customized event handling.

  * I spent a bulk of my time implementing the API connection functionality and then understanding its semantics, and after that deciding on an interface that would meaningfully present and manipulate information from the source. The park service provides several categories of information such as: parks, campgrounds, things to do, and more. Within each category any number of additional parameters could be supplied. I decided to provide two drop down menus for doing an information search, one for the main categories (such as parks, campgrouds), and other for the more fine-grained parameters within each of the main categories. Since the second set of search parameters is dependent on the first, the selection of dropdown list items in the second list would have to be dynamically populated in accordance to the choice in the first dropdown list. To keep the implementation simple, I chose a second parameter that is common to all of the main category searches; namely, the state (such as NY, SC, NC, etc.). In a nutshell, I dynamically build a query based on the selections by the user from both lists, and I send the result as raw JSON in the pane right below the selection boxes. I implemented the API search using XmlHttpRequest and "fetch". I got both to work, but I ended up using XmlHttpRequest. 
