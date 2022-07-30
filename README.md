<p align="center"><img src="icon.svg"></p>

<h1 align="center">tropy-plugin-csl</h1>
Tropy plugin to export your items to Zotero as CSL/JSON

# Custom Templates
To customize how your Tropy item is mapped to CSL/JSON and Zotero,
duplicate your Tropy template in Tropy's template editor and assign
each field you want to export a CSL/JSON field by setting the template
field's label to the corresponding CSL/JSON id. The following CSL/JSON
fields are currently recognized:

* abstract
* accessed
* annote
* archive
* archive-place
* archive_location
* author
* authority
* call-number
* chapter-number
* citation-label
* citation-number
* collection-editor
* collection-number
* collection-title
* composer
* container
* container-author
* container-title
* container-title-short
* dimensions
* director
* DOI
* edition
* editor
* editorial-director
* event
* event-date
* event-place
* first-reference-note-number
* genre
* illustrator
* interviewer
* ISBN
* ISSN
* issue
* issued
* jurisdiction
* keyword
* locator
* medium
* note
* number
* number-of-pages
* number-of-volumes
* original-author
* original-date
* original-publisher
* original-publisher-place
* original-title
* page
* page-first
* PMCID
* PMID
* publisher
* publisher-place
* recipient
* references
* reviewed-author
* reviewed-title
* scale
* section
* source
* status
* submitted
* title
* title-short
* translator
* type
* URL
* version
* volume
* year-suffix

To use your custom mapping, select your template in the plugin's
configuration.

To import to Zotero successfully, your exported data _must_ include the
`type` field with a valid Zotero item type such as 'book', 'chapter',
or 'article-journal' ([CSL types](https://docs.citationstyles.org/en/stable/specification.html#appendix-iii-types)).
