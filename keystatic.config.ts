// keystatic.config.ts
import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // We use 'local' for now. We change this to 'github' later!
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Content',
      path: 'src/content/pages/homepage', // 👈 Where the data file will be saved
      schema: {
        // 1. HERO SECTION
        heroHeadline: fields.text({ label: 'Hero Headline' }),
        heroSubhead: fields.text({ label: 'Hero Subhead' }),
        heroButton: fields.text({ label: 'Hero Button Text' }),

        // 2. ABOUT SECTION
        aboutTitle: fields.text({ label: 'About Title' }),
        aboutText: fields.text({ label: 'About Text', multiline: true }),
        aboutImage: fields.image({
          label: 'About Image',
          directory: 'public/images', // Saves to your public folder
          publicPath: '/images/',
        }),

        // 3. MENU (Array of objects)
        menuTitle: fields.text({ label: 'Menu Section Title' }),
        menuItems: fields.array(
          fields.object({
            name: fields.text({ label: 'Dish Name' }),
            desc: fields.text({ label: 'Description' }),
            price: fields.text({ label: 'Price' }),
          }),
          {
            itemLabel: (props) => props.fields.name.value || 'New Dish',
            label: 'Menu Items',
          }
        ),

        // 4. RESERVATION
        reservationTitle: fields.text({ label: 'Reservation Title' }),
        reservationNote: fields.text({ label: 'Reservation Note' }),

        // 5. CONTACT
        contactAddress: fields.text({ label: 'Address' }),
        contactEmail: fields.text({ label: 'Email' }),
        contactPhone: fields.text({ label: 'Phone' }),
      },
    }),
  },
});