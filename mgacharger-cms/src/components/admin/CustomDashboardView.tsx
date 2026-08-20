'use client'

import React, { useEffect, useState } from 'react'

interface StatsData {
  products: number
  blogs: number
  news: number
  enquiries: number
  newEnquiries: number
  warranties: number
  pendingWarranties: number
  media: number
  gallery: number
  testimonials: number
}

export function CustomDashboardView() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/dashboard-stats', { cache: 'no-store' })
      const data = await res.json()
      if (data.success && data.stats) {
        setStats(data.stats)
      } else {
        setError('Could not load statistics metrics')
      }
    } catch (err: any) {
      setError('Network error fetching statistics')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const statCards = [
    {
      title: 'Products Catalog',
      count: stats?.products ?? 0,
      badge: 'Active Catalog',
      icon: '⚡',
      link: '/admin/collections/products',
      createLink: '/admin/collections/products/create',
      accentColor: '#2563eb',
      lightBg: '#eff6ff',
      borderColor: '#bfdbfe',
    },
    {
      title: 'Customer Enquiries',
      count: stats?.enquiries ?? 0,
      badge: `${stats?.newEnquiries ?? 0} New Enquiries`,
      badgeStyle: { backgroundColor: '#10b981', color: '#ffffff' },
      icon: '📬',
      link: '/admin/collections/enquiries',
      accentColor: '#059669',
      lightBg: '#ecfdf5',
      borderColor: '#a7f3d0',
    },
    {
      title: 'Warranty Claims',
      count: stats?.warranties ?? 0,
      badge: `${stats?.pendingWarranties ?? 0} Pending Review`,
      badgeStyle: { backgroundColor: '#f59e0b', color: '#ffffff' },
      icon: '🛡️',
      link: '/admin/collections/warranty-registrations',
      accentColor: '#d97706',
      lightBg: '#fffbeb',
      borderColor: '#fde68a',
    },
    {
      title: 'Blogs & Knowledge Base',
      count: stats?.blogs ?? 0,
      badge: 'HTML Import Active',
      icon: '📰',
      link: '/admin/collections/blogs',
      createLink: '/admin/collections/blogs/create',
      accentColor: '#7c3aed',
      lightBg: '#f5f3ff',
      borderColor: '#ddd6fe',
    },
    {
      title: 'Media Files (ImageKit)',
      count: stats?.media ?? 0,
      badge: 'Bulk Upload Ready',
      icon: '📷',
      link: '/admin/collections/media',
      accentColor: '#e11d48',
      lightBg: '#fff1f2',
      borderColor: '#fecdd3',
    },
    {
      title: 'Gallery Showcase',
      count: stats?.gallery ?? 0,
      badge: 'Bulk Showcase',
      icon: '🖼️',
      link: '/admin/collections/gallery',
      accentColor: '#0891b2',
      lightBg: '#ecfeff',
      borderColor: '#a5f3fc',
    },
    {
      title: 'Customer Testimonials',
      count: stats?.testimonials ?? 0,
      badge: 'Client Reviews',
      icon: '💬',
      link: '/admin/collections/testimonials',
      accentColor: '#0284c7',
      lightBg: '#f0f9ff',
      borderColor: '#bae6fd',
    },
    {
      title: 'News & Announcements',
      count: stats?.news ?? 0,
      badge: 'Press Updates',
      icon: '📢',
      link: '/admin/collections/news',
      createLink: '/admin/collections/news/create',
      accentColor: '#6d28d9',
      lightBg: '#f5f3ff',
      borderColor: '#ddd6fe',
    },
  ]

  const collectionLinks = [
    { name: 'Products', href: '/admin/collections/products', icon: '📦' },
    { name: 'Enquiries', href: '/admin/collections/enquiries', icon: '📬' },
    { name: 'Warranty Claims', href: '/admin/collections/warranty-registrations', icon: '🛡️' },
    { name: 'Blogs', href: '/admin/collections/blogs', icon: '📰' },
    { name: 'Media Library', href: '/admin/collections/media', icon: '📷' },
    { name: 'Gallery', href: '/admin/collections/gallery', icon: '🖼️' },
    { name: 'Testimonials', href: '/admin/collections/testimonials', icon: '💬' },
    { name: 'News', href: '/admin/collections/news', icon: '📢' },
    { name: 'Categories', href: '/admin/collections/categories', icon: '🏷️' },
    { name: 'Users & Admins', href: '/admin/collections/users', icon: '👥' },
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '32px 40px',
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '28px 36px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#15803d',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  display: 'inline-block',
                }}
              ></span>
              MGA Electronics Operations Dashboard
            </div>

            <h1
              style={{
                fontSize: '28px',
                fontWeight: 900,
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              System Analytics & Control Desk
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '6px 0 0 0', fontWeight: 400 }}>
              Live monitoring for battery chargers, commercial enquiries, warranty registrations, and media assets.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={fetchStats}
              disabled={loading}
              style={{
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease',
              }}
            >
              {loading ? '🔄 Refreshing...' : '🔄 Refresh Metrics'}
            </button>

            <a
              href="/admin/collections/blogs/create"
              style={{
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '10px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 4px rgba(15,23,42,0.15)',
              }}
            >
              📥 Import / Write Blog
            </a>

            <a
              href="/admin/collections/products/create"
              style={{
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '10px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 4px rgba(37,99,235,0.25)',
              }}
            >
              ⚡ Add Product
            </a>
          </div>
        </div>

        {error && (
          <div
            style={{
              padding: '14px 20px',
              marginBottom: '24px',
              borderRadius: '12px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecdd3',
              color: '#9f1239',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* 8 Clean White Stat Cards */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 800,
              color: '#334155',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
            }}
          >
            Live Performance Metrics
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {statCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: card.lightBg,
                        border: `1px solid ${card.borderColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                      }}
                    >
                      {card.icon}
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        backgroundColor: card.badgeStyle ? card.badgeStyle.backgroundColor : '#f1f5f9',
                        color: card.badgeStyle ? card.badgeStyle.color : '#475569',
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>
                    {card.title}
                  </div>

                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 900,
                      color: '#0f172a',
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                    }}
                  >
                    {loading ? '...' : card.count.toLocaleString()}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '14px',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <a
                    href={card.link}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: card.accentColor,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Open Collection &rarr;
                  </a>

                  {card.createLink && (
                    <a
                      href={card.createLink}
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#334155',
                        textDecoration: 'none',
                        backgroundColor: '#f1f5f9',
                        padding: '4px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      + Create
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Collection Navigation Grid */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '28px 36px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Direct Management Short-cuts
            </h2>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
              Quickly jump to any section of the Payload CMS database.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
            }}
          >
            {collectionLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
