'use client'

import { useState } from 'react'

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSync = async (action: string) => {
    setIsLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/sync-instagram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setMessage(`✅ ${result.message}`)
      } else {
        setMessage(`❌ ${result.error}`)
      }
    } catch (error) {
      setMessage(`❌ Error: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Instagram Data Management</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => handleSync('scrape')}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Scraping...' : 'Scrape Instagram'}
            </button>
            
            <button
              onClick={() => handleSync('process')}
              disabled={isLoading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Process Data'}
            </button>
            
            <button
              onClick={() => handleSync('sync')}
              disabled={isLoading}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? 'Syncing...' : 'Full Sync'}
            </button>
          </div>
          
          {message && (
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800">{message}</p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Data Status</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Instagram Posts</h3>
              <p className="text-gray-600">View and manage scraped Instagram content</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Products</h3>
              <p className="text-gray-600">Manage product listings and availability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


