'use client'

import React, { useEffect, useState } from 'react'

interface StatsData {
  products: number
  blogs: number
  publishedBlogs: number
  draftBlogs: number
  news: number
  publishedNews: number
  draftNews: number
  enquiries: number
  newEnquiries: number
  warranties: number
  pendingWarranties: number
  media: number
  gallery: number
  testimonials: number
}

export function DashboardStatsUI() {
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
        setError('Could not load metrics')
      }
    } catch (err: any) {
      setError('Network error fetching metrics')
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
      subText: null,
      link: '/admin/collections/products',
      createLink: '/admin/collections/products/create',
    },
    {
      title: 'Customer Enquiries',
      count: stats?.enquiries ?? 0,
      badge: `${stats?.newEnquiries ?? 0} New`,
      subText: `${stats?.newEnquiries ?? 0} unread enquiries`,
      link: '/admin/collections/enquiries',
    },
    {
      title: 'Warranty Claims',
      count: stats?.warranties ?? 0,
      badge: `${stats?.pendingWarranties ?? 0} Pending`,
      subText: `${stats?.pendingWarranties ?? 0} pending review`,
      link: '/admin/collections/warranty-registrations',
    },
    {
      title: 'Blogs & Articles',
      count: stats?.blogs ?? 0,
      badge: `${stats?.draftBlogs ?? 0} Drafts`,
      subText: `Published: ${stats?.publishedBlogs ?? 0}  |  Drafts: ${stats?.draftBlogs ?? 0}`,
      link: '/admin/collections/blogs',
      createLink: '/admin/collections/blogs/create',
    },
    {
      title: 'News & Announcements',
      count: stats?.news ?? 0,
      badge: `${stats?.draftNews ?? 0} Drafts`,
      subText: `Published: ${stats?.publishedNews ?? 0}  |  Drafts: ${stats?.draftNews ?? 0}`,
      link: '/admin/collections/news',
      createLink: '/admin/collections/news/create',
    },
    {
      title: 'Media Files',
      count: stats?.media ?? 0,
      badge: 'ImageKit Cloud',
      subText: null,
      link: '/admin/collections/media',
    },
    {
      title: 'Gallery Showcase',
      count: stats?.gallery ?? 0,
      badge: 'Bulk Showcase',
      subText: null,
      link: '/admin/collections/gallery',
    },
    {
      title: 'Testimonials',
      count: stats?.testimonials ?? 0,
      badge: 'Client Reviews',
      subText: null,
      link: '/admin/collections/testimonials',
    },
  ]

  return (
    <div
      style={{
        marginBottom: '28px',
        width: '100%',
        fontFamily: 'var(--font-body, system-ui, sans-serif)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--theme-elevation-200, #333333)',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--theme-text, #ffffff)',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            System Metrics Overview
          </h2>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--theme-elevation-500, #888888)',
              margin: '2px 0 0 0',
            }}
          >
            Real-time live counts, blog/news status breakdown & system activity.
          </p>
        </div>

        <button
          onClick={fetchStats}
          disabled={loading}
          style={{
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: 600,
            borderRadius: '4px',
            backgroundColor: 'var(--theme-elevation-150, #262626)',
            color: 'var(--theme-text, #ffffff)',
            border: '1px solid var(--theme-elevation-250, #404040)',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'background-color 0.15s ease',
          }}
        >
          {loading ? 'Refreshing...' : 'Refresh Metrics'}
        </button>
      </div>

      {error && (
        <div
          style={{
            padding: '10px 14px',
            marginBottom: '16px',
            borderRadius: '4px',
            backgroundColor: 'var(--theme-elevation-100, #1e1e1e)',
            border: '1px solid var(--theme-elevation-250, #404040)',
            color: 'var(--theme-text, #ffffff)',
            fontSize: '12px',
          }}
        >
          {error}
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}
      >
        {statCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: 'var(--theme-elevation-100, #181818)',
              border: '1px solid var(--theme-elevation-200, #2c2c2c)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--theme-elevation-600, #aaaaaa)',
                  }}
                >
                  {card.title}
                </span>

                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    padding: '2px 6px',
                    borderRadius: '3px',
                    backgroundColor: 'var(--theme-elevation-200, #2a2a2a)',
                    color: 'var(--theme-elevation-800, #dddddd)',
                    border: '1px solid var(--theme-elevation-250, #3a3a3a)',
                  }}
                >
                  {card.badge}
                </span>
              </div>

              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  color: 'var(--theme-text, #ffffff)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: card.subText ? '4px' : '12px',
                }}
              >
                {loading ? '...' : card.count.toLocaleString()}
              </div>

              {card.subText && (
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--theme-elevation-500, #888888)',
                    marginBottom: '10px',
                    fontWeight: 500,
                  }}
                >
                  {loading ? 'Loading...' : card.subText}
                </div>
              )}
            </div>

            <div
              style={{
                paddingTop: '10px',
                borderTop: '1px solid var(--theme-elevation-150, #222222)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <a
                href={card.link}
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--theme-text, #ffffff)',
                  textDecoration: 'none',
                  opacity: 0.85,
                }}
              >
                View Collection &rarr;
              </a>

              {card.createLink && (
                <a
                  href={card.createLink}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--theme-elevation-700, #cccccc)',
                    textDecoration: 'none',
                    backgroundColor: 'var(--theme-elevation-150, #252525)',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    border: '1px solid var(--theme-elevation-200, #333333)',
                  }}
                >
                  + Add
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
