// ZaUI stylesheet
import 'zmp-ui/zaui.css'
// Tailwind stylesheet
import '@/css/tailwind.scss'
// Your stylesheet
import '@/css/app.scss'

import { RouterProvider } from 'react-router-dom'

import router from './routes'

// React core
import React, { createElement } from 'react'
import { createRoot } from 'react-dom/client'

// Expose app configuration
import appConfig from '../app-config.json'

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig as any
}

const root = createRoot(document.getElementById('app')!)
root.render(createElement(RouterProvider, { router }))
