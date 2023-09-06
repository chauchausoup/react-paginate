import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = 'Progressive Challange' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Progressive Challange` : undefined}
      defaultTitle="Progressive Challange"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
