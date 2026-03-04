import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
    slug: 'orders',
    admin: {
        useAsTitle: 'orderNumber',
    },
    fields: [
        {
            name: 'orderNumber',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'product',
                    type: 'relationship',
                    relationTo: 'products',
                    required: true,
                },
                {
                    name: 'quantity',
                    type: 'number',
                    required: true,
                    min: 1,
                },
                {
                    name: 'price',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'total',
                    type: 'number',
                    required: true,
                },
            ],
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Confirmed', value: 'confirmed' },
                { label: 'Shipped', value: 'shipped' },
                { label: 'Delivered', value: 'delivered' },
                { label: 'Cancelled', value: 'cancelled' },
            ],
            defaultValue: 'pending',
            required: true,
        },
        {
            name: 'customer',
            type: 'group',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'email',
                    type: 'email',
                    required: true,
                },
                {
                    name: 'phone',
                    type: 'text',
                },
            ],
        },
        {
            name: 'shippingAddress',
            type: 'group',
            fields: [
                {
                    name: 'street',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'city',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'pincode',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
