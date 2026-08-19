import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'
import { isAdmin } from '../access/isAdmin'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'requirement', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Public contact form submission allowed
    read: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company / Organization',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'requirement',
      type: 'select',
      required: true,
      options: [
        { label: 'Automotive Battery Chargers', value: 'automotive' },
        { label: 'Industrial Battery Chargers', value: 'industrial' },
        { label: 'Electric Vehicle (EV) Chargers', value: 'ev' },
        { label: 'Inverter Chargers', value: 'inverter' },
        { label: 'Testing Equipment', value: 'testing' },
        { label: 'Custom OEM Solution', value: 'custom' },
        { label: 'Other Inquiry', value: 'other' },
      ],
      label: 'Requirement Category',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message / Specifications',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'NEW',
      options: [
        { label: 'New', value: 'NEW' },
        { label: 'Contacted', value: 'CONTACTED' },
        { label: 'In Progress', value: 'IN_PROGRESS' },
        { label: 'Resolved', value: 'RESOLVED' },
        { label: 'Spam', value: 'SPAM' },
      ],
      label: 'Enquiry Status',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Internal Admin Notes',
      admin: {
        position: 'sidebar',
        description: 'Private notes for sales & technical team.',
      },
    },
  ],
}
