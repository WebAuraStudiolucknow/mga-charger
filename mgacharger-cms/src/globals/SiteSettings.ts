import type { GlobalConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Contact & Company Settings',
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: 'phonePrimary',
      type: 'text',
      required: true,
      defaultValue: '+91 74993 94690',
      label: 'Primary Phone Number',
    },
    {
      name: 'phoneSecondary',
      type: 'text',
      label: 'Secondary Phone Number',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'mgacharger@yahoo.com',
      label: 'Support / Sales Email',
    },
    {
      name: 'whatsappNumber',
      type: 'text',
      required: true,
      defaultValue: '917499394690',
      label: 'WhatsApp Contact Number (No spaces or plus)',
    },
    {
      name: 'facilityAddress',
      type: 'textarea',
      required: true,
      defaultValue: 'Lucknow, Uttar Pradesh, India',
      label: 'Manufacturing Facility Address',
    },
    {
      name: 'yearsOfExperience',
      type: 'text',
      defaultValue: '20+',
      label: 'Years of Experience Badge',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Company Achievement Counters',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Stat Value (e.g., 10k+)',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Stat Label (e.g., Clients Served)',
        },
      ],
    },
  ],
}
