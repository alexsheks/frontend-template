import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'jotai'
import ErrorBoundary from './components/ErrorBoundary'

// Create a client
const queryClient = new QueryClient()

// Configure our app with react-query and jotai providers
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <React.StrictMode>
        <ErrorBoundary fallback="Error...">
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </ErrorBoundary>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
)
