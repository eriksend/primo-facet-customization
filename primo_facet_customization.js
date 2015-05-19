/* uses jquery, which should already be loaded, as Primo uses it as well */
/* this is all hard-coded to facet 7. Replace refereces to exlidFacet7 and exlidFacetSublist7 with the correct facet number for your own needs. */

/* clone topics list */
var topicsHolder = document.getElementById("exlidFacet7")
var topicsList = document.getElementById("exlidFacetSublist7");
var topicsClone1 = topicsList.cloneNode(true);
var topicsClone2 = topicsList.cloneNode(true);

/* copy one, for frequency display */
var topicsHead1 = document.createElement('h4');
var topicsHeadtext1 = document.createTextNode("Topic");
topicsHead1.appendChild(topicsHeadtext1);
topicsHead1.className  = "EXLFacetTitleLabelPHolderfacet_topic_b"

topicsClone1.id = "exlidFacetSublist7b"
topicsHolder.appendChild(topicsHead1);
topicsHolder.appendChild(topicsClone1);

/* copy 2, for alphabetical display */
var topicsHead2 = document.createElement('h4');
var topicsHeadtext2 = document.createTextNode("Topic");
topicsHead2.appendChild(topicsHeadtext2);
topicsHead2.className  = "EXLFacetTitleLabelPHolderfacet_topic_c"

topicsClone2.id = "exlidFacetSublist7c"
topicsHolder.appendChild(topicsHead2);
topicsHolder.appendChild(topicsClone2);

/* sort topics list */
var li = $('#exlidFacetSublist7 li').get();

// sort the list items based on the contents of a nested a tag
li.sort(function(a, b) {
    a = $('a', a).text();
    b = $('a', b).text();

    return (a < b) ? -1 : ((a > b) ? 1 : 0);
});

// reinsert the list items in their new order
$('#exlidFacetSublist7').append(li);

/* sort topics list c */
var li2 = $('#exlidFacetSublist7c li').get();

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
$('#exlidFacetSublist7c').append(li2);

/* Load testing CSS */
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

/* replace "primo1.css" etc. in stylesheets (below) with the correct URLs for the primo stylsheets on your web server, and add or remove from this list as you please. */
var stylesheets = ["primo1.css", "primo2.css", "primo3.css", "primo4.css", "primo5.css"];
var labels = ["Cloud", "Frequency Short", "Frequency Long", "Alpha Short", "Aplha Long", "Reset" ];

var index = 0

function goCSS(){	
    loadjscssfile(stylesheets[index], "css")
    removejscssfile(stylesheets[index-1], "css")
    // comment out or remove this alert when not needed for testing
    alert("Stylesheet loaded: " + labels[index])
    index++
    /* increase or decreast the '5' below, if you have more or fewer than 5 stylsheets in your list */
    if (index > 5){index = 0;}
}
