# primo-facet-customization
Javascript to redesign display of facet data in the Ex Libris Primo library catalog

Primo offers a small ammount of native customization of facet display.

Each type of facet data may natively be set:

* On/Off
* Position in facet menu
* How many items display
* Sort order (frequency or alphabetical)

Because the facet data will be presented predictably we can manipulate it with JavaScript and CSS in ways not offered in the native customizations.

This script and acompanying CSS toggle one facet through six display modes, Word Cloud, Alphabetical (short list), Alphabetical (long list), Frequency (short list), Frequency (long list), and off.

To test it out, activate, or select an active, facet in your Primo, set it to display the number of facets you want in the "short" lists, order by frequency, and and hide it in your default stylesheet.

Then, edit the javascript to point to your selected facet, and the correct URLs for your stylesheets, and insert a link somewhere to call the toggle function.

Have fun
