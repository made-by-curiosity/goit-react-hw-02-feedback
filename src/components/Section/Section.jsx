import { Title } from 'components/Title/Title';

export const Section = ({ titleText, children }) => {
  return (
    <div>
      <Title text={titleText} />
      {children}
    </div>
  );
};
