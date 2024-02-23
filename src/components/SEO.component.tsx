import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  name: string;
  type: string;
  imageUrl?: string;
  // Schema properties
  schemaType?: string;
  schemaContext?: unknown;

  // Additional options
  canonicalUrl?: string;
  shouldIndex?: boolean;
};

const SEO = ({ ...props }: SEOProps) => {
  // Schema.org markup
  if (props.schemaType && props.schemaContext) {
    <script type="application/ld+json">
      {JSON.stringify(props.schemaContext)}
    </script>;
  }

  // Canonical link
  if (props.canonicalUrl) {
    <link rel="canonical" href={props.canonicalUrl} />;
  }

  // Robots meta tag (for indexing control)
  if (!props.shouldIndex) {
    <meta name="robots" content="noindex" />;
  }
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      {/* Facebook */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}

      {/* Twitter */}
      <meta name="twitter:creator" />
      <meta name="twitter:card" content={props.type} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}

      {/* ...other conditional meta tags based on otherProps */}
    </Helmet>
  );
};

export default SEO;
