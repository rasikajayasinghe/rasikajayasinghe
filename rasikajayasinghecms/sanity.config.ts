import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'rasikajayasinghecms',

  projectId: 'fper2vu5',
  dataset: 'rasikajayasinghe_web',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
