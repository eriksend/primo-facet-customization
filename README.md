# primo-facet-customization
Javascript to redesign display of facet data in the Ex Libris Primo library catalog

Primo offers a small ammount of native customization of facet display.

Each type of facet data may natively be set:

* On/Off
* Position in facet menu
* How many items display
* Sort order (frequency or alphabetical)

Because the facet data will be presented predictably we can manipulate it with JavaScript and CSS in ways not offered in the native customizations.

Include the JavaScript file primo_facets.js in your Primo footer, or add the code to a script file of your own, make four or five localizing edits, and start toggling one of your facets between two display modes.

This includes two code blocks that can be uncommednted to switch between two styles tested at Seattle University [ http://primo.seattleu.edu ]. One, designed for "topic" facets, swiches to anf from a word cloud view. The other switches between frequency sorted and alphabetical (assuming your default sort is already frequency!).

Steal my images and CSS, or build your own custom versions.
Some Javascript skill is required for implementation, and facility with CSS is required if you don't want to live with my two display choices.
