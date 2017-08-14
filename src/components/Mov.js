
import React from 'react';
import PropTypes from 'prop-types';

const Mov = props => {
  return (
    <svg width={this.props.width} height={this.props.height}  xmlns="http://www.w3.org/2000/svg"><g fill={this.props.color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M12 10h25v12.5H12V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM16 42.889a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.695 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.308.992.992 0 0 1-.075-.387zm3.308.884v-6.669h.982c.208 0 .344.097.41.293l.104.494c.117-.13.239-.25.367-.358a2.218 2.218 0 0 1 .877-.465c.167-.045.35-.068.55-.068.42 0 .765.114 1.036.341.271.228.474.53.608.907.104-.221.234-.41.39-.569.156-.158.327-.287.513-.387.187-.1.385-.173.595-.22.21-.048.422-.072.634-.072.368 0 .695.056.982.169.286.113.526.277.721.494.195.217.343.481.445.793.102.312.153.67.153 1.072v4.245H27.07v-4.245c0-.424-.094-.744-.28-.958-.186-.215-.46-.322-.819-.322-.165 0-.317.028-.458.085-.141.056-.265.137-.37.243-.107.106-.19.24-.251.4-.06.16-.091.344-.091.553v4.244h-1.612v-4.245c0-.446-.09-.77-.27-.974-.18-.204-.445-.306-.796-.306-.23 0-.445.057-.647.172a2.178 2.178 0 0 0-.562.471v4.882h-1.606zM33.102 37c.498 0 .95.08 1.355.24.405.16.75.388 1.036.683.287.295.507.654.663 1.079.157.425.235.9.235 1.423 0 .53-.078 1.006-.234 1.43a3.088 3.088 0 0 1-.663 1.086 2.88 2.88 0 0 1-1.037.689c-.405.16-.857.24-1.355.24a3.68 3.68 0 0 1-1.359-.24 2.906 2.906 0 0 1-1.043-.689 3.101 3.101 0 0 1-.67-1.086 4.073 4.073 0 0 1-.237-1.43c0-.524.08-.998.237-1.423.158-.425.382-.784.67-1.079a2.949 2.949 0 0 1 1.043-.683c.407-.16.86-.24 1.359-.24zm0 5.636c.554 0 .965-.187 1.231-.56.267-.372.4-.918.4-1.638 0-.719-.133-1.267-.4-1.644-.266-.377-.677-.566-1.231-.566-.564 0-.98.19-1.248.57-.27.378-.403.925-.403 1.64 0 .716.134 1.26.402 1.635.27.375.685.563 1.248.563zm7.67 1.137h-1.456l-2.653-6.669h1.333c.117 0 .216.028.296.084.08.057.135.128.166.215l1.287 3.562c.073.208.135.412.185.611.05.2.094.399.133.598.039-.2.083-.399.133-.598.05-.2.114-.403.192-.611l1.32-3.562a.44.44 0 0 1 .162-.215.465.465 0 0 1 .28-.084h1.267l-2.645 6.669zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Mov.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mov.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mov;