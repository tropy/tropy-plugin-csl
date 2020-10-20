# tropy-plugin-csl
Tropy plugin to export your items to Zoterao as CSL/JSON

# Custom Templates
To customize how your Tropy item is mapped to CSL/JSON and Zotero,
duplicate your Tropy template in Tropy's template editor and assign
each field you want to export a CSL/JSON field by setting the template
field's label to the corresponding CSL/JSON id. The following CSL/JSON
fields are currently recognized:

* chapter-number
* collection-number
* edition
* issue
* number
* number-of-pages
* number-of-volumes
* volume
* accessed
* container
* event-date
* issued
* original-date
* submitted
* author
* collection-editor
* composer
* container-author
* director
* editor
* editorial-director
* illustrator
* interviewer
* original-author
* recipient
* reviewed-author
* translator

To use your custom mapping, select your template in the plugin's
configuration.
