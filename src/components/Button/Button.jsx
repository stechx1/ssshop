/* eslint-disable react/prop-types */
import { Button as AntButton } from 'antd';
export const Button = ({ children }) => {
  return <AntButton className='bg-black hover:bg-gray-800' type='primary'>{children}</AntButton>;
};

// Button.propTypes = {
//   children: PropTypes.node.isRequired
// }
