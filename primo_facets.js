/* requires jquery, which should already be loaded, as Primo uses it as well */

/* begin localization */

/* What facet do you want to restyle? The first enabled facet is labeled "exlidFacet0", 
followed by "exlidFacet1", etc. facets without values in any given search do not cause renumbering
of subsequent facets. Replace "0" below with the number from the facet you want to restyle */

var localFacetNumber = "0" 

/* what image or text will you use for an activation button? */

var activationButtonIsText = "no" // change to "yes" for a text button
var activationButtonOffStateText = "button off-state text" // change to text of off-state button, i.e. "sort" or "cloud"
var activationButtonOnStateText = "button on-state text" // change to text of on-state button, i.e. "un-sort" or "de-cloud"
var activationButtonOffStateImageURL = "http://server/image_on" // change to URL of your off-state button image
var activationButtonOnStateImageURL = "http://server/image_off" // change to URL of your on-state button image

/* local stylesheets */
var activeStylesheetURL = "http://server/styled_css" // change to URL of your on-state button image

/* end localization */

/* uncomment these three lines to try this using Seattle University's facet cloud stylesheet and activation buttons */

// activationButtonOffStateImageURL = "http://proxy.seattleu.edu/public/toggle_cloud_on.png" // change to URL of your off-state button image
// activationButtonOnStateImageURL = "http://proxy.seattleu.edu/public/toggle_cloud_off.png" // change to URL of your on-state button image
// activeStylesheetURL = "http://proxy.seattleu.edu/public/facet_cloud.css" // change to URL of your on-state button image

/* uncomment these four lines to try this using a stylesheet and activation buttons for switching between frequency and alphabetical sorting */

// activationButtonIsText = "yes"
// activationButtonOffStateText = "<br><h6>View All Results Alphabetically</h6>" 
// activationButtonOnStateText = "<br><h6>View Most Common Results</h6>" 
// activeStylesheetURL = "http://proxy.seattleu.edu/public/facet_alpha.css" 

/* generate localized IDs */

localFacetID = "exlidFacet" + localFacetNumber
localFacetSublistID = "exlidFacetSublist" + localFacetNumber

/* identify targets */
var targetFacet = document.getElementById(localFacetID); // find the facet
var targetChildren = document.getElementById(localFacetID).children; // get it's children
counter = 0;
var buttonElement = targetChildren[counter]; // first child is the label
counter++;
if (buttonElement.tagName.toLowerCase() != "h4") { // first child of facet 0 is not the label, test and correct for that by checking for the h4 tag
	buttonElement = targetChildren[counter];
	counter++;
	};
var targetList = targetChildren[counter]; // second (or third for facet 0) child is the list

/* create activation buttion */
var button_a = document.createElement('a');
var button_a_text = document.createTextNode("text");
button_a.setAttribute("id", "facet_display_toggle");
button_a.appendChild(button_a_text);
button_a.href = "javascript:facet_toggleOn()";
if (activationButtonIsText == "no") {
	buttonOffCode = "<img src='" + activationButtonOffStateImageURL + "' alt='Toggle Button' style='height: 16px;width: 16px;vertical-align: text-top;'/>"
	buttonOnCode = "<img src='" + activationButtonOnStateImageURL + "' alt='Toggle Button' style='height: 16px;width: 16px;vertical-align: text-top;'/>"
	}
	else {
		buttonOffCode = activationButtonOffStateText
		buttonOnCode = activationButtonOnStateText
		}
button_a.innerHTML = buttonOffCode;


/* insert activation button alongside the label */
buttonElement.appendChild(button_a);

/* clone targetList */
var targetClone = targetList.cloneNode(true);
targetClone.id = "cloneListAlpha"
targetList.className += " clonedList"; // tag the original for styling
targetClone.style.display = "none"; // hide the inserted  clone
targetFacet.appendChild(targetClone);


/* alpha sort targetList clone */
var li2 = $('#cloneListAlpha li').get();

/* add size classes to li elements */
for (var i=li2.length-2; i>=0; i--){ //search backwards within li2 for links to style
	li2[i].className += " size" + i;
	}

// sort the list items based on the contents of a nested a tag
li2.sort(function(a, b) {
        a = $('a', a).text();
        b = $('a', b).text();

        // you may want to process the text values further here, perhaps
        // running it through $.trim, reducing whitespace sequences with
        // a regular expression, or lower- or upper-casing letters to
        // make the comparison case-insensitive.

        return (a < b) ? -1 : ((a > b) ? 1 : 0);
        });

// reinsert the list items in their new order
$('#cloneListAlpha').append(li2); 

/* functions for calling */

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
            }
}

function facet_toggleOn(){	
    loadjscssfile(activeStylesheetURL, "css")
    cloudHolder = document.getElementById("facet_display_toggle")
    cloudHolder.href = "javascript:facet_toggleOff()";
    cloudHolder.innerHTML = buttonOnCode;
    }

function facet_toggleOff(){	
    removejscssfile(activeStylesheetURL, "css")
    cloudHolder = document.getElementById("facet_display_toggle")
    cloudHolder.href = "javascript:facet_toggleOn()";
    cloudHolder.innerHTML = buttonOffCode;
}
