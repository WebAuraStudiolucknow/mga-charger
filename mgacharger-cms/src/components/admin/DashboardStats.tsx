'use client'

import React, { useEffect, useState } from 'react'

interface StatsData {
  products: { total: number; featured: number }
  blogs: { total: number; published: number; draft: number }
  news: { total: number; published: number; draft: number }
  enquiries: { total: number; new: number }
  warranty: { total: number; approved: number; pending: number }
  gallery: { total: number }
}

export function DashboardStats() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/dashboard-stats')
        if (res.ok) {
          const data = await res.json()
          setStats(data)
        }
      } catch (err) {
        console.error('Failed to load admin stats:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div style={{ marginBottom: '32px', padding: '20px', background: '#1c1c1c', borderRadius: '12px', color: '#888' }}>
        ⚡ Loading MGA Admin Dashboard Analytics...
      </div>
    )
  }

  if (!stats) return null

  const cards = [
    {
      title: 'Blogs',
      icon: '📝',
      totalLabel: 'Total Articles',
      totalValue: stats.blogs.total,
      badges: [
        { label: 'Published', value: stats.blogs.published, color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
        { label: 'Drafts', value: stats.blogs.draft, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
      ],
      link: '/admin/collections/blogs',
    },
    {
      title: 'Products',
      icon: '⚡',
      totalLabel: 'Total Products',
      totalValue: stats.products.total,
      badges: [
        { label: 'Featured', value: stats.products.featured, color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)' },
      ],
      link: '/admin/collections/products',
    },
    {
      title: 'News & Press',
      icon: '📰',
      totalLabel: 'Total News',
      totalValue: stats.news.total,
      badges: [
        { label: 'Published', value: stats.news.published, color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
        { label: 'Drafts', value: stats.news.draft, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
      ],
      link: '/admin/collections/news',
    },
    {
      title: 'Customer Enquiries',
      icon: '📩',
      totalLabel: 'Total Inquiries',
      totalValue: stats.enquiries.total,
      badges: [
        { label: 'New / Unread', value: stats.enquiries.new, color: '#EC4899', bg: 'rgba(236, 72, 153, 0.15)' },
      ],
      link: '/admin/collections/enquiries',
    },
    {
      title: 'Warranty Claims',
      icon: '🛡️',
      totalLabel: 'Total Claims',
      totalValue: stats.warranty.total,
      badges: [
        { label: 'Approved', value: stats.warranty.approved, color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
        { label: 'Pending', value: stats.warranty.pending, color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)' },
      ],
      link: '/admin/collections/warranty-registrations',
    },
    {
      title: 'Gallery Media',
      icon: '🖼️',
      totalLabel: 'Total Photos',
      totalValue: stats.gallery.total,
      badges: [
        { label: 'Live Media', value: stats.gallery.total, color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' },
      ],
      link: '/admin/collections/gallery',
    },
  ]

  return (
    <div style={{ marginBottom: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#fff', letterSpacing: '-0.5px' }}>
            System Analytics Overview
          </h2>
          <p style={{ fontSize: '13px', color: '#888', margin: '4px 0 0 0' }}>
            Real-time status of content, products, inquiries & warranty records
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {cards.map((card, idx) => (
          <a
            key={idx}
            href={card.link}
            style={{
              display: 'block',
              textDecoration: 'none',
              background: '#18181b',
              border: '1px solid #27272a',
              borderRadius: '14px',
              padding: '20px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#27272a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#e4e4e7' }}>{card.title}</span>
              <span style={{ fontSize: '20px' }}>{card.icon}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
              <span style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', lineHeight: 1 }}>
                {card.totalValue}
              </span>
              <span style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: '500' }}>
                {card.totalLabel}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {card.badges.map((b, bIdx) => (
                <div
                  key={bIdx}
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: b.color,
                    background: b.bg,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{b.label}:</span>
                  <span>{b.value}</span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
