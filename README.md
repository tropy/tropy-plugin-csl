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
* abstract
* annote
* archive
* archive_location
* archive-place
* authority
* call-number
* citation-label
* citation-number
* collection-title
* container-title
* container-title-short
* dimensions
* DOI
* event
* event-place
* first-reference-note-number
* genre
* ISBN
* ISSN
* jurisdiction
* keyword
* locator
* medium
* note
* original-publisher
* original-publisher-place
* original-title
* page
* page-first
* PMCID
* PMID
* publisher
* publisher-place
* references
* reviewed-title
* scale
* section
* source
* status
* title
* title-short
* type
* URL
* version
* year-suffix

To use your custom mapping, select your template in the plugin's
configuration.

To import to Zotero successfully, your exported data _must_ include the
`type` field with a valid Zotero item type such as 'book', 'bookSection',
or 'journalArticle'.
