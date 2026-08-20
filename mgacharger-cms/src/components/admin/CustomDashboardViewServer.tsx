import React from 'react'
import { DashboardStatsUI } from './DashboardStatsUI'

/**
 * Server Component for Payload 3.x Custom Dashboard View.
 * Safely handles Payload Server View props (i18n, locale, etc.) on the server side
 * without passing non-serializable function props down to Client Components.
 */
export function CustomDashboardViewServer() {
  return <DashboardStatsUI />
}
