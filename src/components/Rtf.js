
import React from 'react';
import PropTypes from 'prop-types';

const Rtf = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill={this.props.color} fill-rule="nonzero"/><path d="M17 12h22v2H17v-2zm-8 5h30v2H9v-2zm0 5h30v2H9v-2zM9 9h5v5H9V9z" fill={this.props.color}/><path d="M26.651 43.012a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .706-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .286.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.309.884v-6.669h.942c.165 0 .28.03.345.091.065.06.108.165.13.312l.098.806c.238-.412.517-.737.838-.975.32-.238.68-.358 1.079-.358.33 0 .602.076.819.228l-.208 1.202c-.013.079-.041.134-.084.166a.286.286 0 0 1-.176.049c-.065 0-.154-.015-.267-.045a1.784 1.784 0 0 0-.448-.046c-.334 0-.62.092-.858.276-.238.184-.44.454-.605.81v4.153H29.96zm7.501.104c-.576 0-1.02-.164-1.332-.49-.313-.328-.468-.78-.468-1.356v-3.725h-.677a.325.325 0 0 1-.224-.084c-.063-.056-.094-.14-.094-.253v-.637l1.073-.176.338-1.82a.322.322 0 0 1 .12-.202.381.381 0 0 1 .237-.071h.832v2.1h1.755v1.143h-1.755v3.614c0 .209.052.371.156.488a.53.53 0 0 0 .416.175c.1 0 .183-.011.25-.035a1.377 1.377 0 0 0 .309-.15.223.223 0 0 1 .117-.035c.048 0 .087.011.117.035.03.024.063.06.097.108l.481.78a2.43 2.43 0 0 1-.806.441 3 3 0 0 1-.942.15zm3.127-.104v-5.46l-.579-.091a.615.615 0 0 1-.302-.13.34.34 0 0 1-.114-.273v-.657h.994v-.493c0-.382.058-.724.173-1.028.115-.303.28-.56.494-.773.214-.212.475-.375.783-.487a3.01 3.01 0 0 1 1.04-.17c.308 0 .594.042.858.124l-.032.806c-.01.126-.068.204-.176.234-.108.03-.234.046-.377.046-.19 0-.36.02-.51.061a.859.859 0 0 0-.38.215.972.972 0 0 0-.238.403 2.035 2.035 0 0 0-.081.62v.442h1.736v1.145h-1.684v5.466h-1.605zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z" fill="#FFF"/></g></svg>
  );
};

Rtf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rtf.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rtf;