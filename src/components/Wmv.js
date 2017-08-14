
import React from 'react';
import PropTypes from 'prop-types';

const Wmv = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M12 10h25v12.5H12V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM14 42.889a1 1 0 0 1 .075-.384.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .696.286.984.984 0 0 1 .285.695.993.993 0 0 1-.286.695 1 1 0 0 1-.696.28 1.016 1.016 0 0 1-.704-.28.924.924 0 0 1-.208-.308.992.992 0 0 1-.075-.387zm2.035-5.785h1.273c.122 0 .224.028.306.084a.363.363 0 0 1 .156.215l.956 3.562c.052.195.094.386.126.572.033.186.064.373.095.559.047-.186.098-.373.152-.559.054-.186.112-.377.172-.572l1.105-3.575a.403.403 0 0 1 .156-.215.454.454 0 0 1 .273-.084h.709c.117 0 .214.028.293.084.078.057.13.128.155.215l1.093 3.64c.056.186.107.367.152.543.046.175.09.352.133.53.03-.187.064-.373.101-.56.037-.186.084-.379.14-.578l.988-3.562a.363.363 0 0 1 .156-.215.494.494 0 0 1 .286-.084h1.216l-2.113 6.669H22.82c-.138 0-.238-.095-.299-.286l-1.202-3.855a7.604 7.604 0 0 1-.107-.38 4.971 4.971 0 0 1-.081-.38c-.027.13-.055.259-.085.387a6.85 6.85 0 0 1-.104.386l-1.215 3.842c-.061.19-.178.286-.352.286h-1.228l-2.112-6.669zm11.095 6.669v-6.669h.982c.208 0 .344.097.409.293l.104.494c.117-.13.24-.25.367-.358a2.218 2.218 0 0 1 .878-.465c.167-.045.35-.068.549-.068.42 0 .766.114 1.037.341.27.228.473.53.607.907.105-.221.234-.41.39-.569.157-.158.328-.287.514-.387.186-.1.385-.173.595-.22.21-.048.421-.072.634-.072.368 0 .695.056.981.169.286.113.526.277.721.494.196.217.344.481.446.793.102.312.152.67.152 1.072v4.245h-1.605v-4.245c0-.424-.093-.744-.28-.958-.186-.215-.459-.322-.819-.322-.164 0-.317.028-.458.085-.14.056-.264.137-.37.243-.106.106-.19.24-.25.4-.061.16-.091.344-.091.553v4.244H31.01v-4.245c0-.446-.09-.77-.27-.974-.18-.204-.445-.306-.796-.306-.23 0-.446.057-.647.172a2.178 2.178 0 0 0-.563.471v4.882H27.13zm14.053 0h-1.456l-2.652-6.669h1.332c.118 0 .216.028.296.084.08.057.136.128.166.215l1.287 3.562c.074.208.135.412.185.611.05.2.094.399.133.598.04-.2.084-.399.134-.598.05-.2.113-.403.192-.611l1.319-3.562a.44.44 0 0 1 .163-.215.465.465 0 0 1 .279-.084h1.267l-2.645 6.669zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Wmv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wmv.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Wmv;