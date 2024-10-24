import { Helmet } from "react-helmet-async";

interface HelmetMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const HelmetMeta = ({ title, description, keywords }: HelmetMetaProps) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};

export default HelmetMeta;
