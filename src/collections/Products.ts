import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'salePrice',
            type: 'number',
        },
        {
            name: 'stock',
            type: 'number',
            required: true,
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Bags', value: 'bags' },
                { label: 'Jewelry', value: 'jewelry' },
                { label: 'Clothing', value: 'clothing' },
                { label: 'Accessories', value: 'accessories' },
            ],
            required: true,
        },
        {
            name: 'gender',
            type: 'select',
            options: [
                { label: 'Women', value: 'women' },
                { label: 'Men', value: 'men' },
                { label: 'Unisex', value: 'unisex' },
            ],
        },
        {
            name: 'storeCollection',
            type: 'select',
            options: [
                { label: 'Winter', value: 'winter' },
                { label: 'Summer', value: 'summer' },
                { label: 'Essentials', value: 'essentials' },
            ],
        },
        {
            name: 'badge',
            type: 'select',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Sale', value: 'sale' },
                { label: 'Hot', value: 'hot' },
                { label: 'Limited', value: 'limited' },
            ],
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
                { label: 'Archived', value: 'archived' },
            ],
            defaultValue: 'draft',
            required: true,
        },
    ],
}
