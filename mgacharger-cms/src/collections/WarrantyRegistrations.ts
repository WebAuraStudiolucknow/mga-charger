import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'
import { isAdmin } from '../access/isAdmin'

export const WarrantyRegistrations: CollectionConfig = {
  slug: 'warranty-registrations',
  admin: {
    useAsTitle: 'referenceId',
    defaultColumns: ['referenceId', 'fullName', 'productName', 'serialNumber', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Public warranty claim submission allowed
    read: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'referenceId',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Reference Claim ID',
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Customer Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Customer Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Customer Phone Number',
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      label: 'Service Address',
    },
    {
      name: 'productName',
      type: 'text',
      required: true,
      label: 'Product Category / Model Name',
    },
    {
      name: 'serialNumber',
      type: 'text',
      required: true,
      label: 'Serial Number / Batch Code',
    },
    {
      name: 'purchaseDate',
      type: 'date',
      required: true,
      label: 'Purchase Date',
    },
    {
      name: 'invoiceNumber',
      type: 'text',
      required: true,
      label: 'Invoice / Bill Number',
    },
    {
      name: 'dealerName',
      type: 'text',
      label: 'Dealer / Store Name',
    },
    {
      name: 'issueDescription',
      type: 'textarea',
      required: true,
      label: 'Issue Description / Claim Reason',
    },
    {
      name: 'warrantyBill',
      type: 'upload',
      relationTo: 'media',
      label: 'Warranty Bill / Receipt File',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'NEW',
      options: [
        { label: 'New Claim', value: 'NEW' },
        { label: 'Under Review', value: 'UNDER_REVIEW' },
        { label: 'Approved', value: 'APPROVED' },
        { label: 'Rejected', value: 'REJECTED' },
        { label: 'Resolved', value: 'RESOLVED' },
      ],
      label: 'Claim Status',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Internal Inspection / Action Notes',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
