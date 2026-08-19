'use client'

import React, { useState } from 'react'
import { useForm } from '@payloadcms/ui'

export function BlogHtmlImportUI() {
  const { dispatchFields, getData } = useForm()

  const setFieldValue = (path: string, value: any) => {
    if (dispatchFields && value !== undefined && value !== null) {
      dispatchFields({
        type: 'UPDATE',
        path,
        value,
      })
    }
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'upload' | 'paste'>('upload')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [pastedHtml, setPastedHtml] = useState('')
  const [loading, setLoading] = useState(false)
  const [statusText, setStatusText] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  // Preview State
  const formData = getData()
  const previewData = {
    title: formData?.title || 'Untitled Article',
    excerpt: formData?.excerpt || '',
    content: formData?.content || '',
    author: formData?.author || 'Technical Support',
    date: formData?.publishedAt ? new Date(formData.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString(),
    image: formData?.imagePath || '/images/blog-placeholder.jpg',
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (!file.name.endsWith('.html') && !file.name.endsWith('.htm')) {
        setErrorMsg('Please select a valid .html or .htm file.')
        setSelectedFile(null)
        return
      }
      setErrorMsg('')
      setSelectedFile(file)
    }
  }

  const handleImport = async () => {
    setErrorMsg('')
    setSuccessMsg('')

    if (activeTab === 'upload' && !selectedFile) {
      setErrorMsg('Please select an HTML file to upload.')
      return
    }

    if (activeTab === 'paste' && !pastedHtml.trim()) {
      setErrorMsg('Please paste HTML content in the text area.')
      return
    }

    setLoading(true)
    setStatusText('Reading HTML content...')

    try {
      let res: Response
      if (activeTab === 'upload' && selectedFile) {
        const payload = new FormData()
        payload.append('file', selectedFile)
        setStatusText('Extracting metadata and article content...')
        res = await fetch('/api/blogs/import-html', {
          method: 'POST',
          body: payload,
        })
      } else {
        setStatusText('Parsing pasted HTML markup...')
        res = await fetch('/api/blogs/import-html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ html: pastedHtml }),
        })
      }

      const json = await res.json()

      if (!json.success) {
        throw new Error(json.error || 'Failed to parse HTML.')
      }

      setStatusText('Auto-filling blog form fields...')
      const data = json.data

      // Auto-fill Payload form fields dynamically
      if (data.title) setFieldValue('title', data.title)
      if (data.slug) setFieldValue('slug', data.slug)
      if (data.excerpt) setFieldValue('excerpt', data.excerpt)
      if (data.content) setFieldValue('content', data.content)
      if (data.author) setFieldValue('author', data.author)
      if (data.imagePath) setFieldValue('imagePath', data.imagePath)
      if (data.publishedAt) setFieldValue('publishedAt', data.publishedAt)

      // Set status to draft by default
      setFieldValue('status', 'draft')

      setSuccessMsg('✅ HTML imported successfully! All fields auto-filled. Status set to Draft.')
      setIsOpen(false)
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during HTML import.')
    } finally {
      setLoading(false)
      setStatusText('')
    }
  }

  return (
    <div style={{ marginBottom: '24px', padding: '16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
            ⚡ HTML Blog Workflow Tools
          </h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>
            Import raw HTML to auto-fill form fields, or preview the rendered blog with website styles.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              background: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📥 Import HTML (Upload / Paste)
          </button>

          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            style={{
              background: '#059669',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            👁️ Live Web Preview
          </button>
        </div>
      </div>

      {successMsg && (
        <div style={{ marginTop: '12px', padding: '10px 14px', background: '#f0fdf4', color: '#166534', borderRadius: '6px', border: '1px solid #bbf7d0', fontSize: '13px', fontWeight: 500 }}>
          {successMsg}
        </div>
      )}

      {/* IMPORT MODAL */}
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(15, 23, 42, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '12px', width: '100%', maxWidth: '640px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>
                Import Blog from HTML
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '20px', color: '#64748b', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '20px 24px' }}>
              {/* TABS */}
              <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <button
                  type="button"
                  onClick={() => { setActiveTab('upload'); setErrorMsg('') }}
                  style={{
                    padding: '10px 16px',
                    border: 'none',
                    background: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: activeTab === 'upload' ? '#2563eb' : '#64748b',
                    borderBottom: activeTab === 'upload' ? '2px solid #2563eb' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  📁 Option A: Upload HTML File
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('paste'); setErrorMsg('') }}
                  style={{
                    padding: '10px 16px',
                    border: 'none',
                    background: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: activeTab === 'paste' ? '#2563eb' : '#64748b',
                    borderBottom: activeTab === 'paste' ? '2px solid #2563eb' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  📝 Option B: Paste HTML Content
                </button>
              </div>

              {/* TAB A: UPLOAD */}
              {activeTab === 'upload' && (
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                    Select HTML File (.html, .htm)
                  </label>
                  <input
                    type="file"
                    accept=".html,.htm,text/html"
                    onChange={handleFileChange}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px',
                      border: '2px dashed #cbd5e1',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      cursor: 'pointer',
                    }}
                  />
                  {selectedFile && (
                    <p style={{ marginTop: '8px', fontSize: '13px', color: '#166534', fontWeight: 500 }}>
                      Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / 1024).toFixed(1)} KB)
                    </p>
                  )}
                </div>
              )}

              {/* TAB B: PASTE */}
              {activeTab === 'paste' && (
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                    Paste Raw HTML Markup
                  </label>
                  <textarea
                    rows={8}
                    value={pastedHtml}
                    onChange={(e) => setPastedHtml(e.target.value)}
                    placeholder="<h2>Article Title</h2><p>Paste your HTML content here...</p>"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      resize: 'vertical',
                    }}
                  />
                </div>
              )}

              {errorMsg && (
                <div style={{ marginTop: '14px', padding: '10px 14px', background: '#fef2f2', color: '#991b1b', borderRadius: '6px', border: '1px solid #fecaca', fontSize: '13px' }}>
                  ❌ {errorMsg}
                </div>
              )}

              {loading && (
                <div style={{ marginTop: '14px', padding: '10px 14px', background: '#eff6ff', color: '#1e40af', borderRadius: '6px', border: '1px solid #bfdbfe', fontSize: '13px', fontWeight: 500 }}>
                  ⏳ {statusText}
                </div>
              )}
            </div>

            <div style={{ padding: '16px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={loading}
                style={{ padding: '8px 16px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 600, fontSize: '14px', color: '#475569', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleImport}
                disabled={loading}
                style={{ padding: '8px 20px', background: loading ? '#93c5fd' : '#2563eb', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '14px', color: '#ffffff', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Importing...' : 'Import & Auto-Fill Form'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIVE PREVIEW MODAL */}
      {isPreviewOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(15, 23, 42, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '900px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', background: '#0f172a', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                👁️ Live Website Preview (Draft View)
              </span>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '22px', color: '#94a3b8', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '40px 32px', background: '#ffffff' }}>
              <div style={{ maxWidth: '768px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginTop: '16px', marginBottom: '16px', lineHeight: 1.25 }}>
                    {previewData.title}
                  </h1>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#64748b', fontSize: '14px' }}>
                    <span>📅 {previewData.date}</span>
                    <span>✍️ {previewData.author}</span>
                  </div>
                </div>

                {previewData.excerpt && (
                  <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#1e293b', fontWeight: 500, marginBottom: '28px', borderLeft: '4px solid #2563eb', paddingLeft: '16px' }}>
                    {previewData.excerpt}
                  </p>
                )}

                <div
                  className="prose prose-lg"
                  style={{ color: '#334155', lineHeight: 1.7, fontSize: '16px' }}
                  dangerouslySetInnerHTML={{ __html: previewData.content || '<p><em>No article content available.</em></p>' }}
                />
              </div>
            </div>

            <div style={{ padding: '14px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#64748b' }}>
                Status: <strong>{formData?.status || 'draft'}</strong>
              </span>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                style={{ padding: '8px 20px', background: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
