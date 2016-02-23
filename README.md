# primo-facet-customization
Javascript to redesign display of facet data in the Ex Libris Primo library catalog

### Created by
 - Doug Eriksen, Seattle University

### Description
 - Primo offers a small ammount of native customization of facet display.
 - In the PBO each type of facet data may natively be set:
* On/Off
* Position in facet menu
* How many items display
* Sort order (frequency or alphabetical)

### System Components
 - Because the facet data will be presented predictably we can manipulate it with JavaScript and CSS in ways not offered in the native customizations.
 - Include the JavaScript file primo_facets.js in your Primo footer, or add the code to a script file of your own, make four or five localizing edits, and start toggling one of your facets between two display modes.
 - This includes two code blocks that can be uncommednted to switch between two styles tested at Seattle University [ http://primo.seattleu.edu ]. One, designed for "topic" facets, swiches to and from a word cloud view. The other switches between frequency sorted and alphabetical (assuming your default sort is already frequency!).

### Skillset Requirements
- Steal my images and CSS, or build your own custom versions.
- Some Javascript skill is required for implementation, and facility with CSS is required if you don't want to live with my two display choices.

### Implementation (Recipe) Steps
 - Customize the localization variables in the javascript withdetails specific to your own Primo instance.

```js
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
```

### Accessibility
 - Accessability of word cloud display is limited
 - Activation toggle link is an image, but has alt text

### Browser Support
 - All modern browsers

### Mobile Support
 - hidden in default Primo mobile views
