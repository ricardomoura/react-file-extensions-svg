
import React from 'react';
import PropTypes from 'prop-types';

const Mkv = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M12 10h25v12.5H12V10zm11.303 8.724l4.061-2.031c.485-.243.49-.641 0-.886l-4.061-2.03c-.485-.243-.886.005-.886.56v3.827c0 .564.396.804.886.56zM16 42.775a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.313 1.024 1.024 0 0 1 .705-.285.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.31.992.992 0 0 1-.075-.386zm3.308.884V36.99h.982c.208 0 .344.097.41.292l.104.495c.117-.13.239-.25.367-.358a2.218 2.218 0 0 1 .877-.465c.167-.045.35-.068.55-.068.42 0 .765.114 1.036.341.271.228.474.53.608.907.104-.221.234-.41.39-.569.156-.158.327-.287.513-.386.187-.1.385-.174.595-.221.21-.048.422-.072.634-.072.368 0 .695.056.982.169.286.113.526.277.721.494.195.217.343.481.445.793.102.312.153.67.153 1.072v4.245H27.07v-4.245c0-.424-.094-.744-.28-.958-.186-.215-.46-.322-.819-.322-.165 0-.317.028-.458.084-.141.057-.265.138-.37.244-.107.106-.19.24-.251.4-.06.16-.091.344-.091.552v4.245h-1.612v-4.245c0-.446-.09-.77-.27-.974-.18-.204-.445-.306-.796-.306-.23 0-.445.057-.647.172a2.178 2.178 0 0 0-.562.472v4.881h-1.606zM31.88 34v5.532h.299a.577.577 0 0 0 .253-.046.657.657 0 0 0 .195-.169l1.657-2.047a.969.969 0 0 1 .235-.205.622.622 0 0 1 .325-.075h1.468l-2.073 2.477c-.074.09-.15.174-.227.25a1.482 1.482 0 0 1-.254.198c.091.065.171.14.24.227.07.087.14.18.209.28l2.222 3.237H34.98a.707.707 0 0 1-.319-.065.624.624 0 0 1-.233-.221l-1.697-2.529a.517.517 0 0 0-.195-.194.722.722 0 0 0-.293-.046h-.364v3.055h-1.605V34h1.605zm8.885 9.659h-1.456l-2.652-6.669h1.333c.117 0 .215.028.295.084.08.057.136.128.166.215l1.287 3.562c.074.208.135.412.185.611.05.2.094.399.133.598.04-.2.084-.399.134-.598.05-.2.113-.403.192-.611l1.319-3.562a.44.44 0 0 1 .163-.215.465.465 0 0 1 .279-.084h1.267l-2.645 6.669zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Mkv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mkv.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Mkv;