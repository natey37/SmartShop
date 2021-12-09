import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      <h3>test</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
