import './ErrorMessage.css';

export const ErrorMessage = ({
  message = 'An error occurred on the server. Please try again later or try to reload the page',
}) => (
  <p className='text'>{message}</p>
);
