
import React from 'react';
import PropTypes from 'prop-types';

const Wav = props => {
	const { size, color } = props;
  return (
    <svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M0 2l2-2v48l-2-2h48l-2 2V0l2 2H0zm0-2h48v48H0V0z" fill-rule="nonzero"/><path d="M29.411 21.09V9l-10.496 1.496v9.721a3.32 3.32 0 0 0-1.064.184c-1.307.45-2.103 1.58-1.779 2.522.325.943 1.648 1.342 2.955.892.995-.343 1.694-1.078 1.828-1.826h.062v-5.903l2.765-.428v-1.913l-2.765.428v-1.636l6.492-.926v8.252a3.339 3.339 0 0 0-.994.184c-1.307.45-2.104 1.58-1.78 2.522.325.943 1.648 1.342 2.955.892 1.238-.426 2.018-1.461 1.821-2.37zM18 42.908a1 1 0 0 1 .075-.383.916.916 0 0 1 .208-.312 1.024 1.024 0 0 1 .705-.286.984.984 0 0 1 .695.286.984.984 0 0 1 .287.695.993.993 0 0 1-.286.696 1 1 0 0 1-.695.28 1.016 1.016 0 0 1-.706-.28.924.924 0 0 1-.208-.309.992.992 0 0 1-.075-.387zm2.035-5.785h1.273c.122 0 .224.029.306.085a.363.363 0 0 1 .156.215l.956 3.561c.052.196.094.386.126.572.033.187.064.373.095.56.047-.187.098-.373.152-.56.054-.186.112-.376.172-.572l1.105-3.575a.403.403 0 0 1 .156-.214.454.454 0 0 1 .273-.084h.709c.117 0 .214.028.293.084.078.056.13.128.155.215l1.093 3.64c.056.186.107.367.152.542.046.176.09.352.133.53.03-.186.064-.373.101-.559.037-.186.084-.38.14-.579l.988-3.562a.363.363 0 0 1 .156-.214.494.494 0 0 1 .286-.084h1.216l-2.113 6.668H26.82c-.138 0-.238-.095-.299-.285l-1.202-3.855a7.604 7.604 0 0 1-.107-.38 4.971 4.971 0 0 1-.081-.38c-.027.13-.055.258-.085.386a6.85 6.85 0 0 1-.104.387l-1.215 3.842c-.061.19-.178.285-.352.285h-1.228l-2.112-6.669zm16.321 6.67h-.721a.777.777 0 0 1-.358-.069c-.087-.045-.152-.137-.195-.276l-.143-.474a5.507 5.507 0 0 1-.497.4 3.02 3.02 0 0 1-.504.288 2.57 2.57 0 0 1-.553.176 3.324 3.324 0 0 1-.65.059 2.56 2.56 0 0 1-.78-.114 1.682 1.682 0 0 1-.614-.342 1.55 1.55 0 0 1-.4-.565 2.006 2.006 0 0 1-.142-.786c0-.252.066-.5.198-.745s.352-.466.66-.663c.307-.197.717-.36 1.228-.49s1.146-.204 1.904-.221v-.39c0-.447-.094-.777-.282-.992-.189-.214-.463-.322-.822-.322-.26 0-.477.03-.65.091-.174.061-.324.13-.452.205-.128.076-.246.144-.355.205a.72.72 0 0 1-.357.091.465.465 0 0 1-.28-.084.665.665 0 0 1-.188-.209l-.293-.513c.768-.702 1.693-1.053 2.776-1.053.39 0 .738.064 1.043.192.306.128.565.305.777.533.212.227.374.5.484.816.11.316.166.662.166 1.04v4.211zm-3.12-1.002c.165 0 .316-.015.455-.045s.27-.076.393-.137a2.09 2.09 0 0 0 .358-.224c.115-.089.23-.194.347-.315v-1.124c-.468.021-.859.061-1.173.12a3.118 3.118 0 0 0-.757.224c-.19.091-.326.197-.406.319a.705.705 0 0 0-.12.396c0 .282.083.483.25.604.167.122.384.182.653.182zm7.806 1.002h-1.456l-2.651-6.67h1.332c.117 0 .216.029.296.085.08.056.135.128.165.215l1.288 3.561c.073.209.135.412.185.611.05.2.094.4.133.599.039-.2.083-.4.133-.599.05-.199.114-.402.192-.61l1.32-3.563a.44.44 0 0 1 .162-.214.465.465 0 0 1 .28-.084h1.267l-2.646 6.668zM0 30h48v15.007A2.99 2.99 0 0 1 44.997 48H3.003A3.006 3.006 0 0 1 0 45.007V30z"/></g></svg>
  );
};

Wav.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wav.defaultProps = {
  color: '#FFFFFF',
  size: '24',
};

export default Wav;