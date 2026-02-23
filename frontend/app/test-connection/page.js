'use client';

import { useState, useEffect } from 'react';

export default function TestConnection() {
  const [results, setResults] = useState({
    apiUrl: '',
    isProduction: false,
    backendStatus: 'checking...',
    backendMessage: '',
    timestamp: ''
  });

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'NOT SET';
    const isProduction = !apiUrl.includes('localhost');
    
    setResults(prev => ({
      ...prev,
      apiUrl,
      isProduction,
      timestamp: new Date().toLocaleString()
    }));

    // Test backend connection
    if (apiUrl === 'NOT SET') {
      setResults(prev => ({
        ...prev,
        backendStatus: '❌ Environment variable not set',
        backendMessage: 'NEXT_PUBLIC_API_URL is not configured. Add it in Vercel and REDEPLOY!'
      }));
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/auth/test`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const data = await response.json();
        setResults(prev => ({
          ...prev,
          backendStatus: '✅ Connected',
          backendMessage: JSON.stringify(data, null, 2)
        }));
      } else {
        setResults(prev => ({
          ...prev,
          backendStatus: '❌ Backend responded with error',
          backendMessage: `Status: ${response.status} - Backend might not be deployed or URL is wrong`
        }));
      }
    } catch (error) {
      setResults(prev => ({
        ...prev,
        backendStatus: '❌ Cannot connect',
        backendMessage: `${error.message}\n\nPossible causes:\n1. Backend not deployed\n2. Wrong backend URL\n3. Backend crashed\n4. CORS issue`
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gold-400">Connection Test</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Environment Configuration</h2>
            <div className="space-y-2 font-mono text-sm">
              <div>
                <span className="text-gray-400">API URL:</span>
                <span className="ml-2 text-green-400">{results.apiUrl}</span>
              </div>
              <div>
                <span className="text-gray-400">Environment:</span>
                <span className="ml-2 text-blue-400">
                  {results.isProduction ? 'Production' : 'Development'}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Timestamp:</span>
                <span className="ml-2">{results.timestamp}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Backend Status</h2>
            <div className="space-y-2">
              <div className="text-lg font-semibold">{results.backendStatus}</div>
              {results.backendMessage && (
                <pre className="bg-gray-900 p-4 rounded text-xs overflow-x-auto">
                  {results.backendMessage}
                </pre>
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
            <div className="space-y-3 text-sm">
              {results.apiUrl === 'NOT SET' && (
                <div className="bg-red-500/20 border border-red-500 rounded p-4">
                  <p className="font-semibold text-red-400">❌ NEXT_PUBLIC_API_URL not set!</p>
                  <p className="mt-2">Steps to fix:</p>
                  <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Go to Vercel Dashboard</li>
                    <li>Click your frontend project</li>
                    <li>Settings → Environment Variables</li>
                    <li>Add: NEXT_PUBLIC_API_URL = your-backend-url/api</li>
                    <li>Check all 3 boxes (Production, Preview, Development)</li>
                    <li>Click Save</li>
                    <li><strong className="text-yellow-400">IMPORTANT: Go to Deployments → Click ... → Redeploy</strong></li>
                    <li>Wait 2-3 minutes for deployment to finish</li>
                    <li>Refresh this page</li>
                  </ol>
                </div>
              )}
              
              {results.apiUrl.includes('localhost') && (
                <div className="bg-yellow-500/20 border border-yellow-500 rounded p-4">
                  <p className="font-semibold text-yellow-400">⚠️ Using localhost URL</p>
                  <p className="mt-2">This won't work in production. Update to your backend Vercel URL:</p>
                  <code className="block mt-2 bg-gray-900 p-2 rounded">
                    NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
                  </code>
                  <p className="mt-2 text-yellow-300">Then REDEPLOY in Vercel!</p>
                </div>
              )}
              
              {results.backendStatus.includes('Cannot connect') && results.apiUrl !== 'NOT SET' && (
                <div className="bg-red-500/20 border border-red-500 rounded p-4">
                  <p className="font-semibold text-red-400">❌ Backend not responding</p>
                  <p className="mt-2">Check:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Did you deploy backend to Vercel?</li>
                    <li>Is the backend URL correct?</li>
                    <li>Try visiting: <code className="bg-gray-900 px-2 py-1 rounded">{results.apiUrl.replace('/api', '')}</code></li>
                    <li>Check Vercel backend project logs for errors</li>
                    <li>Verify Root Directory is set to "backend" in backend project</li>
                  </ul>
                </div>
              )}

              {results.backendStatus.includes('✅') && (
                <div className="bg-green-500/20 border border-green-500 rounded p-4">
                  <p className="font-semibold text-green-400">✅ Everything is working!</p>
                  <p className="mt-2">Your frontend can connect to the backend. Registration should work now!</p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={checkConnection}
            className="bg-gold-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
          >
            Recheck Connection
          </button>
        </div>
      </div>
    </div>
  );
}
