import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Titre', description: 'Titre de l\'article (H1)' },
        }),
        description: fields.text({
          label: 'Meta description',
          description: 'Description pour Google (150-160 caractères)',
          multiline: true,
        }),
        pubDate: fields.date({
          label: 'Date de publication',
          defaultValue: { kind: 'today' },
        }),
        updatedDate: fields.date({
          label: 'Date de mise à jour',
        }),
        cluster: fields.text({
          label: 'Cluster SEO',
          description: 'Ex: SASU, Micro-entreprise, EURL…',
        }),
        clusterSlug: fields.text({
          label: 'Slug du cluster',
          description: 'Ex: sasu, micro-entreprise, eurl…',
        }),
        keywords: fields.array(
          fields.text({ label: 'Mot-clé' }),
          { label: 'Mots-clés', itemLabel: (props) => props.fields.value.value ?? '' }
        ),
        cta: fields.select({
          label: 'CTA principal',
          options: [
            { label: 'LegalPlace', value: 'legalplace' },
            { label: 'Qonto', value: 'qonto' },
          ],
          defaultValue: 'legalplace',
        }),
        noelScore: fields.number({
          label: 'Score Noël Ceta (0-7)',
          validation: { min: 0, max: 7 },
        }),
        draft: fields.checkbox({
          label: 'Brouillon',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Contenu',
        }),
      },
    }),
  },
});
