import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  name: string;
  type: string;
  imageUrl?: string;
};

const SEO = ({ title, description, name, type, imageUrl }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* ...other conditional meta tags based on otherProps */}
    </Helmet>
  );
};

export default SEO;
