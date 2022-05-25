'use strict'

const { writeFile } = require('fs').promises
const { clipboard } = require('electron')

const TEMPLATE = require('./template.json')

class CSLPlugin {
  constructor(options, context) {
    this.context = context
    this.options = {
      ...CSLPlugin.defaults,
      ...options
    }
  }

  convert(item, template) {
    let csl = {}
    let fields = template.fields || template.field

    for (let { property, label } of fields) {
      if (property in item) {
        csl[label] = cast(item[property][0]?.['@value'], label)
      }
    }

    return csl
  }

  async export(data) {
    let out = []
    let exp = await this.expand(data)
    let template = loadTemplate(
      this.context.window?.store.getState(),
      this.options.template
    )

    // TODO check if item or photo template

    for (let g of exp) {
      for (let item of g['@graph']) {
        out.push(this.convert(item, template))
      }
    }

    await this.write(JSON.stringify(out, null, 2))
  }

  async write(text) {
    if (this.options.clipboard) {
      clipboard.write({ text })
    } else {
      let { file, filters, prompt } = this.options

      if (!file || prompt) {
        file = await this.dialog.save({
          defaultPath: file,
          filters
        })
      }

      if (!file) return
      await writeFile(file, text)
    }
  }

  get dialog() {
    return this.context.dialog
  }

  async expand(data) {
    return this.context.json.expand(data)
  }

  get logger() {
    return this.context.logger
  }
}

CSLPlugin.defaults = {
  clipboard: false,
  filters: [
    {
      name: 'CSL/JSON',
      extensions: ['json']
    }
  ],
  prompt: false
}

const loadTemplate = (state, id) => state?.ontology.template[id] || TEMPLATE

const cast = (value, label) => {
  switch (TYPES[label]) {
    case 'number':
      return Number(value)
    case 'date':
      return { raw: value }
    case 'name':
      return [{ literal: value }]
    default:
      return value
  }
}

const TYPES = {
  'chapter-number': 'number',
  'collection-number': 'number',
  'edition': 'number',
  'issue': 'number',
  'number': 'number',
  'number-of-pages': 'number',
  'number-of-volumes': 'number',
  'volume': 'number',

  'accessed': 'date',
  'container': 'date',
  'event-date': 'date',
  'issued': 'date',
  'original-date': 'date',
  'submitted': 'date',

  'author': 'name',
  'collection-editor': 'name',
  'composer': 'name',
  'container-author': 'name',
  'director': 'name',
  'editor': 'name',
  'editorial-director': 'name',
  'illustrator': 'name',
  'interviewer': 'name',
  'original-author': 'name',
  'recipient': 'name',
  'reviewed-author': 'name',
  'translator': 'name'
}

module.exports = CSLPlugin
