import PropTypes from "prop-types";

export const FAQ = ({ children }) => {
  return (
    <section className="faq" id="faq">
        {children}
    </section>

  )
}


FAQ.propTypes = {
  children: PropTypes.any,
};
