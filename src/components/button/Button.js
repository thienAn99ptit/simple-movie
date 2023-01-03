function Button({ children, className, type, onClick }) {
  return (
    <button
      className={`bg-primary px-5 py-2 rounded-md font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
