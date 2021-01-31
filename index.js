//    GLOBAL VARIABLES
//create variable to snapshot the previously submitted form
let SNAPSHOT = "";

//    GENERATE ELEMENTS
function generateForm() {
  const content = document.querySelector("#content");
  content.innerHTML = `<form id="businessEntry">
    <label for="uniqueNumber">Unique Form Number:</label>
    <input
      type="text"
      id="uniqueNumber"
      name="uniqueNumber"
      required
    >
    <label for="ownerName">Owner's Name:</label>
    <input
      type="text"
      id="ownerName"
      name="ownerName"
      required
    >
    <label for="ownerId">Owner's User ID:</label>
    <input
      type="text"
      id="ownerId"
      name="ownerId"
      required
    >
    <label for="customKey">Custom Key (no spaces):</label>
    <input
      type="text"
      id="customKey"
      name="customKey"
      required
    >
    <label for="customColor">Custom Color:</label>
    <input
      type="text"
      id="customColor"
      name="customColor"
      required
    >
    <label for="businessName">Business Name:</label>
    <input
      type="text"
      id="businessName"
      name="businessName"
      required
    >
    <label for="bgUrl">Background URL:</label>
    <input
      type="text"
      id="bgUrl"
      name="bgUrl"
      required
    >
    <label for="smallImage">Small Img URL:</label>
    <input
      type="text"
      id="smallImage"
      name="smallImage"
      required
    >
    <label for="businessType">Business Type:</label>
    <input
      type="text"
      id="businessType"
      name="businessType"
      required
    >
    <label for="world">World:</label>
    <input
      type="text"
      id="world"
      name="world"
      required
    >
    <label for="hours">Working Hours:</label>
    <input
      type="text"
      id="hours"
      name="hours"
      required
    >
    <label for="employeeList">Employee List(separate with ","):</label>
    <input
      type="text"
      id="employeeList"
      name="employeeList"
      required
    >
    <label for="description">Description (separate paragraphs with p tags):</label>
    <textarea
      id="description"
      name="description"
      required
    ></textarea>
    <label for="admittance">Admittance (as customer/employee):</label>
    <textarea
      id="admittance"
      name="admittance"
      required
    ></textarea>
    <button type="submit">SUBMIT</button>
  </form>`
}

function generateIntro() {
  const intro = document.querySelector("#intro");
  intro.innerHTML = `<p>
    If you're reading this right now, you're looking to submit a Business 
    to the business directory. Please fill out the form below fully. If you 
    are not certain of some fields, create a doc and wait to fill this out 
    until you have all the required information ready. Once you click submit 
    this form will generate the html code for your Business entry. You can 
    copy and paste this html into the thread once you have dismissed this 
    page.
  </p>`;
}

function generateBackButton() {
  const intro = document.querySelector("#intro");
  intro.innerHTML = `<button name="backBtn" class="bkBtn">Do Another</button>`;
  backButtonHandler();
}

function generateHtml(formData) {
  //get employee list from formdata
  const employees = formData.get("employeeList");
  //create function to separate employees into list items in html
  const listEmployees = (list) => {
    const dividedList = list.split(", ");
    return dividedList.reduce((acc, item) => {
      return acc += `<li>${item}</li>`
    }, "<ul>") + "</ul>"
  }
  //get content section
  const content = document.querySelector("#content");
  content.innerText = 
  `[dohtml]<style type="text/css">
  #${formData.get("customKey")} .iwannalay, #${formData.get("customKey")} .iwannabe { background-color: #${formData.get("customColor")}; } 
  #${formData.get("customKey")} .withyou { color: #${formData.get("customColor")}; }
  #${formData.get("customKey")} .iwannafeel-s b { border-bottom: 1px solid #${formData.get("customColor")}; }
  #${formData.get("customKey")} .iwannafeel-s::-webkit-scrollbar-thumb, #${formData.get("customKey")} .iwannafeel, #${formData.get("customKey")} .yourlove { border: 1px solid #${formData.get("customColor")}; }
  </style>
  <div id="${formData.get("customKey")}">
    <div class="shutthedoor">
      <div class="iwannabe"> ${formData.get("businessName")} 
        <label for="toggle-${formData.get(uniqueNumber)}"> 
          <div class="withyou"> 
            <i class="fa fa-plus-square" aria-hidden="true">
            </i> 
          </div> 
        </label> 
      </div> 
      <div class="turnthelight" style="background-image: url(${formData.get("bgUrl")})"></div> 
      <input type="checkbox" id="toggle-${formData.get(uniqueNumber)}">
        <div class="thelightoff">
          <table 
            cellpadding="0" 
            cellspacing="0" 
            style="
              margin: 0px; 
              border: none; 
              padding: 0px; 
              max-height: 0px;
            ">
              <td valign="top">
                <div class="iwannafeel">
                  <div class="iwannafeel-s">
                    <center>
                    <a href="{forumLink}">
                      [b][ link to business forum ][/b]
                    </a>
                    </center>
                    <p>
                    <p>
                      [b]business description 
                      <i class="fa fa-angle-double-right" aria-hidden="true"></i>[/b] 
                      ${formData.get("description")}
                      [b]admittance policy <i class="fa fa-angle-double-right" aria-hidden="true"></i>[/b] 
                      ${formData.get("admittance")}
                      [b]employees <i class="fa fa-angle-double-right" aria-hidden="true"></i>[/b] 
                    ${listEmployees(employees)}
                    <p>
                    [b]hiring <i class="fa fa-angle-double-right" aria-hidden="true"></i>[/b] 
                    <ul>[i][ hiring ][/i]</ul>
                  </div>
                </div>
              </td>
              <td valign="top">
                <div class="yourlove">
                  <a href="http://cttw.jcink.net/index.php?showuser=277">
                    <div class="yourlove-i" style="background-image: url(${formData.get("smallImage")});"></div>
                  </a>
                </div>
                <a href="/index.php?showuser=${formData.get("ownerId")}"> 
                  <div class="iwannalay" title="owner's name">${formData.get("ownerName")} 
                    <span> 
                      <i class="fa fa-building" aria-hidden="true"></i>
                    </span>
                  </div>
                </a>
                <div class="iwannalay" title="business type"> 
                  ${formData.get("businessType")} 
                  <span> 
                    <i class="fa fa-tags" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="iwannalay" title="world location"> 
                  ${formData.get("world")} 
                  <span> 
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="iwannalay" title="hours of operation">
                  ${formData.get("hours")} 
                  <span> 
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="iwannalay" title="quest giver location">-- 
                  <span><i class="fa fa-star" aria-hidden="true"></i> 
                  </span>
                </div>
              </td>
            </table>
          </div>
        </div>
      </div>[/dohtml]`;
}

//    EVENT HANDLERS
function submitButtonHandler() {
  const submitButton = document.querySelector("#businessEntry");
  submitButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = document.querySelector("#content");
    SNAPSHOT = content.innerHTML;
    const formData = new FormData(event.target);
    generateHtml(formData);
    generateBackButton();
    backButtonHandler();
  })
}

function backButtonHandler() {
  const backBtn = document.querySelector(".bkBtn");
  backBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const content = document.querySelector("#content");
    content.innerHTML = SNAPSHOT;
    submitButtonHandler();
  })
}

//    MAIN
function main() {
  generateIntro();
  generateForm();
  submitButtonHandler();
}

window.addEventListener("DOMContentLoaded", main);
